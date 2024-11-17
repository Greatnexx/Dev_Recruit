import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Portal = () => {
  return (

    <>

     <Link to="/" className="text-blue-700  mb-5 flex items-center  ">
       <BiArrowBack className='mr-2'/>
        Go back 
      </Link>
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-semibold text-gray-900">React Portals</h1>
      <p className="mt-6 text-lg text-gray-700 leading-relaxed">
        React Portals are a powerful tool for rendering components outside the DOM hierarchy of the parent component.
        They are particularly useful for UI elements like modals, tooltips, and popups, where you want to render components
        above other elements or outside the flow of the parent layout. This technique allows you to manage complex UI elements
        in a cleaner and more manageable way.
      </p>
      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Key Use Cases:</h2>
        <ul className="mt-4 text-lg text-gray-700 list-disc pl-6">
          <li>Rendering Modals and Popups</li>
          <li>Displaying Tooltips above content</li>
          <li>Global Notification Systems</li>
        </ul>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-800">Why Use React Portals?</h2>
        <ul className="mt-4 text-lg text-gray-700 list-disc pl-6">
          <li>Avoid overflow or z-index issues when rendering UI components above other content.</li>
          <li>Separate concerns and keep modal components isolated from the main app layout.</li>
          <li>Manage complex UI elements globally while retaining React's component structure.</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Portal;
