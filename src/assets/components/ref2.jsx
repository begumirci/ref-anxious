import { useRef } from 'react';

export default function Ref2() {
  const formRef = useRef();

  function handleForm(e) {
    e.preventDefault();
    console.log(formRef.current);
    const formData = new FormData(formRef.current);
    const formObj = Object.fromEntries(formData.entries());
    console.log(formObj);
  }
  return (
    <div>
      <form ref={formRef}>
        <input type='text' name='name' placeholder='name' />
        <input type='text' name='username' placeholder='surname' />
        <button onClick={handleForm}>Gönder</button>
      </form>
    </div>
  );
}
