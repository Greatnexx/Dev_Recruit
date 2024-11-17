import { FaSearch } from "react-icons/fa"
import {NavLink } from "react-router-dom"

const Navbar = () => {

  const activeStyles = ({isActive})=> isActive? "bg-black py-2 px-7 text-white": " py-2 px-7 text-white"
  
  return (
    <header className="bg-blue-700 p-6">
      <nav className=" text-[#FFF] flex justify-end gap-3 items-center">
        <ul><li><NavLink to ='/search'><FaSearch/></NavLink></li></ul>
        <ul><li><NavLink to ='/form' className={activeStyles}>Form</NavLink></li></ul>
        <ul><li><NavLink to ='/modal' className={activeStyles}>Modal</NavLink></li></ul>
      </nav>
    </header>
  )
}

export default Navbar
