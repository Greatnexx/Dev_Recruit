import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Jsx = () => {
  return (
    <>
       <Link to="/" className="text-blue-700  mb-5 flex items-center  ">
       <BiArrowBack className='mr-2'/>
        Go back 
      </Link>

      <div>
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-5">What is JSX and Why is it Used in React?</h1>
        <p className="mb-3">
          <strong>JSX (JavaScript XML):</strong> JSX is a syntax extension for JavaScript that looks similar to HTML. It allows developers to write HTML-like code directly in their JavaScript files, which makes it easier to create and visualize UI components in React.
        </p>
        <p className="mb-3">
          JSX makes React code more readable and concise by allowing developers to mix JavaScript logic with UI markup in a single file. Under the hood, JSX is converted into regular JavaScript calls to React's `createElement` function.
        </p>

        <h2 className="text-xl font-semibold mt-8">Example of JSX:</h2>
        <pre className="bg-gray-100 p-5 rounded-md shadow-md mb-5">
          {`// JSX Example
const HelloWorld=()=> {
  return <h1>Hello, World!</h1>;
}`}
        </pre>

        <h2 className="text-xl font-semibold mt-8">Why is JSX Used in React?</h2>
        <p className="mb-3">
          1. **Improved Readability:** JSX allows you to write UI code that looks similar to HTML, making it easier for developers to read and understand.
        </p>
        <p className="mb-3">
          2. **Integration of Logic and UI:** It enables developers to write JavaScript expressions directly within the UI, which simplifies the creation of dynamic components.
        </p>
        <p className="mb-3">
          3. **Developer Efficiency:** Writing JSX is faster and less error-prone compared to manually using `React.createElement` calls for UI creation.
        </p>

       
      </div>

      </div>
      
    </>
  )
}

export default Jsx
