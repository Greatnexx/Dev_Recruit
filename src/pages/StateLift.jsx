import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const StateLift = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Link to="/" className="text-blue-700 mb-5 flex items-center px-4 md:px-10">
        <BiArrowBack className="mr-2" />
        Go back
      </Link>
      <div className="bg-gray-50 min-h-screen px-4 md:px-10 lg:px-20 py-8">
        <h1 className="text-[24px] md:text-[30px] font-bold mb-8 text-center md:text-left">
          Concept of Lifting States Up in React
        </h1>

        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10">
          <strong>Lifting state up in React</strong> refers to the practice of moving the state from a child component
          to the closest common parent component. This is done when multiple child components need to access or update
          the same state. The parent component manages the state and passes it down to the children via props.
        </p>

        <h2 className="text-[20px] md:text-[24px] font-bold mt-8 mb-5">Example:</h2>

        <div className="space-y-6">
          {/* Parent Component */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Parent Component:</h3>
            <pre className="bg-white p-4 rounded-lg shadow-md text-sm md:text-base overflow-x-auto">
              {`
const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <IncrementButton
       onIncrement={handleIncrement}/>
      <DisplayCount count={count} />
    </div>
  );
};

export default ParentComponent;
              `}
            </pre>
          </div>

          {/* Increment Button */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Child A (Increment Button Component):</h3>
            <pre className="bg-white p-4 rounded-lg shadow-md text-sm md:text-base overflow-x-auto">
              {`
const IncrementButton = ({ onIncrement }) => {
  return (
    <button
      onClick={onIncrement}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
    >
      Increment
    </button>
  );
};

export default IncrementButton;
              `}
            </pre>
          </div>

          {/* Display Count */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Child B (Display Count Component):</h3>
            <pre className="bg-white p-4 rounded-lg shadow-md text-sm md:text-base overflow-x-auto">
              {`
const DisplayCount = ({ count }) => {
  return (
    <div>
      <p>Current Count: {count}</p>
    </div>
  );
};

export default DisplayCount;
              `}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default StateLift;
