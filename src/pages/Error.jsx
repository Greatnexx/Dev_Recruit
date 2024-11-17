import { CiWarning } from "react-icons/ci"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="flex justify-center flex-col h-screen  items-center">
      <h1 className="text-[35px] ">ERROR </h1>
        <CiWarning className="text-yellow-600 text-[100px]" />
      <Link className="text-blue-700" to="/">Go back to the homepage</Link>
    </div>
  )
}

export default Error
