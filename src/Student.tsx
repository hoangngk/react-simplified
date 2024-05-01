interface StudentProps {
  name: string;
  age: number;
}

function Student({ name, age }: StudentProps) {
  return (
    <div>
      <h1>Hello, {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}

export default Student;