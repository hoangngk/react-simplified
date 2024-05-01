import './App.css'
import { useState } from 'react';
// import Student from './Student';
import { Child } from './Child.tsx';

function App() {
  const [isShow, setIsShow] = useState<boolean>(true)
  // const childComponent = isShow ? <Child/> : null;

  return (
    <div>
      <button style={{display: 'block', marginBottom: '1rem'}} onClick={() => setIsShow(s => !s)}>
        Show / Hide
      </button>
      {/*{isShow ? <Student name={'hoang'} age={28} /> : null}*/}
      {/*{childComponent}*/}
      <Child/>
    </div>
  )
}

export default App