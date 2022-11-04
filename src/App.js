import './App.css';

import RecordBtn from './icon/RecordBtn';

import Clock from './Clock';

import React, { useState, useEffect } from 'react';
import { startRecording, stopRecording } from './scripts/recorder'

function App() {
  const [isRecording, setRecordState] = useState(false);

  const [time, setTime] = React.useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(prevTime => prevTime + 1); // <-- Change this line!
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <RecordBtn
          onClick={async () => {
            if (isRecording) {
              stopRecording();
              setRecordState(false);
            } else if (await startRecording()) {
              setTime(0);
              setRecordState(true);
            }
          }}
          isActive={isRecording}
          style={{
            width: "15vmin", height: "15vmin"
          }}
        />
        <p>
          {
            isRecording ?
              <Clock time={time} /> :
              "Start Recording"
          }
        </p>
      </header>
    </div>
  );
}

export default App;
