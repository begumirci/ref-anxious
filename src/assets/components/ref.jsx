import { useRef } from 'react';
import Ref2 from './ref2';

export default function Ref() {
  const inputRef = useRef();
  const divRef = useRef();
  const number = useRef(0);

  function focustoInput() {
    inputRef.current.focus();
  }
  function changeColor() {
    divRef.current.style.color = 'red';
    divRef.current.style.border = '5px solid red';
  }
  console.log(number.current);
  function sayiArttır() {
    number.current += 1;
    console.log('fonk ici' + number.current);
  }

  return (
    <div ref={divRef}>
      <h1>USE REF</h1>
      <input type='text' placeholder='Buraya Yazın' ref={inputRef} />
      <button onClick={focustoInput}>Inputa focus ol</button>
      <button onClick={changeColor}>Renk Değiştir</button>
      <button onClick={sayiArttır}>Sayı Arttır</button>
      <span>{number.current}</span>

      <Ref2 />
    </div>
  );
}
