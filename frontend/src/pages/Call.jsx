// src/pages/Call.jsx
import { useState, useRef } from "react";
import Button from "../components/Button";

export default function Call() {
  const [connected, setConnected] = useState(false);
  const [muted, setMuted] = useState(false);
  const localAudioRef = useRef(null);

  const startCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      localAudioRef.current.srcObject = stream;
      setConnected(true);
      setMuted(false);
    } catch (err) {
      console.error("Ошибка доступа к микрофону:", err);
    }
  };

  const toggleMute = () => {
    if (localAudioRef.current?.srcObject) {
      localAudioRef.current.srcObject.getAudioTracks().forEach(track => track.enabled = muted);
      setMuted(!muted);
    }
  };

  const endCall = () => {
    if (localAudioRef.current?.srcObject) {
      localAudioRef.current.srcObject.getTracks().forEach(track => track.stop());
      setConnected(false);
      setMuted(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-4">
      <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Молодёжная конференция</h1>

      {!connected ? (
        <Button onClick={startCall} color="green">Подключиться к звонку 🙏</Button>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg text-blue-900 font-medium">Вы подключены ✅</p>
          <div className="flex space-x-4">
            <Button onClick={toggleMute} color={muted ? "red" : "blue"}>
              {muted ? "Включить звук 🔊" : "Выключить звук 🔇"}
            </Button>
            <Button onClick={endCall} color="red">Завершить звонок ✝️</Button>
          </div>
        </div>
      )}

      <audio ref={localAudioRef} autoPlay muted={muted} />
    </div>
  );
}
