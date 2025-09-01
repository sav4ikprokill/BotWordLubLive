const ws = new WebSocket("wss://yourserver.example.com/ws/audio");

ws.binaryType = "arraybuffer";

navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const mediaRecorder = new MediaRecorder(stream);
    mediaRecorder.start(250); // Отправлять аудио каждые 250 мс

    mediaRecorder.ondataavailable = event => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(event.data);
      }
    };

    mediaRecorder.onstop = () => {
      ws.close();
    };
  })
  .catch(error => {
    console.error("Ошибка доступа к микрофону:", error);
  });

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

ws.onmessage = event => {
  const reader = new FileReader();
  reader.onload = () => {
    const arrayBuffer = reader.result;
    audioCtx.decodeAudioData(arrayBuffer, buffer => {
      const source = audioCtx.createBufferSource();
      source.buffer = buffer;
      source.connect(audioCtx.destination);
      source.start(0);
    });
  };
  reader.readAsArrayBuffer(event.data);
};

ws.onopen = () => {
  console.log("WebSocket подключение открыто");
};

ws.onclose = () => {
  console.log("WebSocket соединение закрыто");
};

ws.onerror = error => {
  console.error("WebSocket ошибка:", error);
};
