export default function Color({ hex, name, setBgColor }) {
  return (
    <button
      className="color-square"
      style={{ backgroundColor: hex }}
      onClick={() => setBgColor(hex)}
    >
      <h2>{name}</h2>
    </button>
  );
}
