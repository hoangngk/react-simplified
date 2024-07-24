import React, { useEffect, useRef } from "react";

const UseStateOrRef = () => {
  // const [name, setName] = React.useState("John");
  const nameRef = useRef<HTMLInputElement>(null);
  // useEffect with empty dependency array is equivalent to componentDidMount
  // this means the function passed to useEffect will only run once when the component mounts
  useEffect(() => {
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = nameRef.current?.value;
    if (!name || name === "") return;

    alert(`Hello, ${nameRef.current?.value}`);
  };

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <label
          htmlFor="inputField"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Your Name
        </label>
        <input
          type="text"
          id="inputField"
          className="w-full text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="John Doe"
          ref={nameRef}
        />
        <button className="mt-2">Alert</button>
      </form>
    </div>
  );
};

export default UseStateOrRef;
