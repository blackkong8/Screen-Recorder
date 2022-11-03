let recordedBlobs, mediaRecorder, stream;

const startRecording = async () => {
    recordedBlobs = [];

    try {
        stream = await navigator.mediaDevices.getDisplayMedia();
    } catch (e) {
        console.error(e);
        return;
    }

    try {
        mediaRecorder = new MediaRecorder(stream);
    } catch (e) {
        stream.getTracks().forEach(track => track.stop());
        console.error(e);
        return;
    }

    mediaRecorder.onstop = (e) => {
        stream.getTracks().forEach(track => track.stop());

        console.log('Recorder stopped: ', e);
        console.log('Recorded Blobs: ', recordedBlobs);

        const blob = new Blob(recordedBlobs, {
            type: "video/mp4"
        });
        const url = URL.createObjectURL(blob);

        window.open(
            url
        )
    }
    mediaRecorder.ondataavailable = e => {
        if (e.data?.size > 0) {
            recordedBlobs.push(e.data);
        }
    }

    mediaRecorder.start();
    return true;
}

const stopRecording = async () => mediaRecorder.stop();

export { startRecording, stopRecording };