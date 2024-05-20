import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  const add = () => {
    if (input === "") return alert("값이 입력되지 않았습니다");
    setResult((prev) => prev + parseInt(input));
    setInput("");
  };
  const sub = () => {
    if (input === "") return alert("값이 입력되지 않았습니다");
    setResult((prev) => prev - parseInt(input));
    setInput("");
  };

  const reset = () => {
    setResult(0);
  };
  return (
    <div>
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} /> 만큼을
        <button onClick={add}>더할게요</button> <button onClick={sub}>뺄게요</button>
        <button onClick={reset}>초기화</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{result}</p>
      </div>
    </div>
  );
}
