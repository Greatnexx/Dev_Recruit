import { FaLongArrowAltRight } from "react-icons/fa"
import questions from "../data/Questions"
import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div className="bg-blue-gray-50 min-h-screen px-11">
      <h1 className="text-[30px] font-bold py-12">QUESTIONS LISTS</h1>
      {questions.map((item) => (
        <div
          key={item.id}
          className="  py-5"
        >
          <h1>{item.id}. {item.question}</h1>
          <Link to={item.answerPath}>
            <button className="bg-blue-700 py-2 px-4 text-[#FFF] rounded-md flex items-center gap-2 mt-5">
              View Answer <FaLongArrowAltRight />
            </button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Homepage
