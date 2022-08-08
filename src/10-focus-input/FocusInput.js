import { useEffect, useRef } from "react";

export default function FocusInput() {
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);
  return (
    <div>
      <label htmlFor="focused-input">Focus me on page load!</label>
      <input name="focused-input" ref={ref}></input>
    </div>
  );
}
