import { useEffect } from "react";

export default function WindowEvent() {
  const doubleClick = () => alert("double click");

  useEffect(() => {
    window.addEventListener("dblclick", doubleClick);

    return () => {
      window.removeEventListener("dblclick", doubleClick);
    };
  }, []);
  return <h2>Window event active</h2>;
}
