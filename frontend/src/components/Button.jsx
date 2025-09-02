// src/components/Button.jsx
export default function Button({ onClick, children, color = "blue" }) {
  const colors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-green-600 hover:bg-green-700",
  };
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-white font-semibold rounded-xl shadow-md transition ${colors[color]}`}
    >
      {children}
    </button>
  );
}
