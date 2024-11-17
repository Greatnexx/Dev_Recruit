import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const ContextApi = () => {
  const { name } = useContext(UserContext);

  return (
    <>
      <Link to="/" className="text-blue-700 mb-5 flex items-center">
        <BiArrowBack className="mr-2" />
        Go Back
      </Link>
      <div className="bg-gray-50 h-screen px-[50px] py-10">
        <h1 className="text-[24px] font-bold mb-6">
          What is the Context API in React?
        </h1>
        <p>
          The Context API in React provides a way to manage global state and share data across components without the need to pass props down manually at every level of the component tree. It helps to avoid **prop drilling**, making it easier to manage state in a more structured and efficient manner.
        </p>
        <h2 className="text-[20px] font-bold mt-10 mb-4">Example:</h2>
        <pre className="bg-white p-10 rounded-md">
          <p>
            A global state containing a name (`Daniel Godwin`) is managed within
            the `UserProvider` component using <br /> the Context API. The `name`
            value is accessed in this component via the `useContext` hook,<br />
            allowing us to display it without the need for prop drilling.
          </p>
        </pre>
        <p className="mt-8 text-[18px]">
          Good Morning, <strong>{name}</strong>!
        </p>
      </div>
    </>
  );
};

export default ContextApi;
