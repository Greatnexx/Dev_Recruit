import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

// Parent Component
const StateAndProps = () => {
  const [message, setMessage] = useState(""); 

  const handleMessageChange = (e) => {
    setMessage(e.target.value); // Updated handler
  };

  return (
    <>
      <Link to="/" className="text-blue-700  mb-5 flex items-center  ">
       <BiArrowBack className='mr-2'/>
        Go back 
      </Link>
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-5">
          Difference Between State and Props
        </h1>
        <p className="mb-3">
          <strong>State:</strong> State is managed within a component and can be
          updated using the `useState` hook. It represents the dynamic data of
          a component.
        </p>
        <p className="mb-3">
          <strong>Props:</strong> Props are data passed from a parent component
          to a child component. Props are read-only and cannot be modified by
          the child.
        </p>

        <p className="text-lg mt-5 mb-8">
          Example below demonstrates using **state** to manage a form input in
          the parent component and passing it as **props** to a child component:
        </p>

        <div className="bg-gray-100 p-5 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Parent Component</h2>
          <input
            type="text"
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message..."
            className="border border-gray-300 p-2 rounded w-full mb-4"
          />
          <ChildComponent message={message} />
        </div>
      </div>
    </>
  );
};

const ChildComponent = ({ message }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mt-4">Child Component</h3>
      <p className="text-md">
        The message passed from the parent is:{" "}
        <span className="font-bold text-blue-600">
          {message || "No message yet"}
        </span>
      </p>
    </div>
  );
};

export default StateAndProps;
