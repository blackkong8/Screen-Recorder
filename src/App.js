import './App.css';

import RecordBtn from './icon/RecordBtn';

import React, { useState } from 'react';
import { startRecording, stopRecording } from './scripts/recorder'

function App() {
  const [isRecording, setRecordState] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <RecordBtn
          onClick={async () => {
            if (isRecording) {
              stopRecording();
              setRecordState(false);
            } else if (await startRecording()) {
              setRecordState(true);
            }
          }}
          isActive={isRecording}
          style={{
            width: "15vmin", height: "15vmin"
          }}
        />
        <p>
          {isRecording ? "Stop" : "Start Recording"}
        </p>
      </header>
    </div>
  );
}

export default App;
