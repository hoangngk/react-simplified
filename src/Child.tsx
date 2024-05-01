import { useEffect, useState } from 'react';

type Props = {
  name?: string
};

export function Child(props: Props) {
  const [name, setName] = useState<string | undefined>(props.name)
  const [age, setAge] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  useEffect(() => {
    // React will run  the setup code when the component is mounted
    // and run the cleanup code with old values when the component is re-rendered or unmounted
    // and run the setup code with new values when the component is re-rendered
    console.log('setup code', name)
    
    document.addEventListener('click', () => {
      console.log('click')
    })

    return () => {
      // cleanup
      console.log('cleanup', name)
    }
  }, [name]);

  return (
    <div>
      <p>Name:</p>
      <input type="text" onChange={handleChange}/>
      <br/>
      <br/>
      <p>Age:</p>
      <button onClick={() => setAge(age => age - 1)}>-</button>
      {age}
      <button onClick={() => setAge(age => age + 1)}>+</button>
      <br/>
      <p>My name {name} and age {age}</p>
    </div>
  );
}