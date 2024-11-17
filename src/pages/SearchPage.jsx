import { useEffect, useState } from "react"
import { fruits } from "../data/Fruits"
import { Link } from "react-router-dom"
import { BiArrowBack } from "react-icons/bi"

const SearchPage = () => {
    const [searchTerm,setSearchTerm] =useState('')
    const [debouncedSearchTerm,setDebouncedSearchTerm]=useState(searchTerm)

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setDebouncedSearchTerm(searchTerm)
        },300)
        return ()=>clearTimeout(timeout)


    },[searchTerm])
    const filteredFruits = fruits.filter((fruit) => fruit.toLowerCase().includes(debouncedSearchTerm.toLowerCase()))
    


    const handleChange=(e)=>{
        setSearchTerm(e.target.value)

    }

    
  return (

<>
    <Link to="/" className="text-blue-700 mb-5 flex items-center">
    <BiArrowBack className='mr-2' />
    Go back 
</Link>
      <div className="px-[50px] bg-gray-50 py-3">
        <h1 className="md:text-[40px] text-[25px] text-center font-bold   " >An example Demostrating the search functionality </h1>
        <div class="w-full max-w-sm min-w-[200px] m-auto mt-6">
  <div class="relative flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600">
      <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
    </svg>
 
    <input
    class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
    placeholder="search..." 
    onChange={handleChange}
    value={searchTerm}
    />
    
   
  </div>
</div>


 {filteredFruits.length === 0 ? (<><p>Search not found...</p></>):(<>
 {
  filteredFruits && filteredFruits.map((fruit,index)=>(
    <ul key={index} className="border-b border-gray-200 p-2">
      {fruit}
    </ul>
 
 ))}
 
 </>)}
</div>
</>
  )
}

export default SearchPage
