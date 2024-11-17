import { BrowserRouter, Route, Routes } from "react-router-dom"

import Homepage from "./pages/Homepage"
import StateAndProps from "./pages/StateAndProps"
import Jsx from "./pages/Jsx"
import FetchData from "./pages/FetchData"
import StateLift from "./pages/StateLift"
import UserProvider from "./contexts/UserProvider"
import ContextApi from "./pages/ContextApi"
import Todo from "./pages/Todo"
import SearchPage from "./pages/SearchPage"
import FormPage from "./pages/FormPage"
import ReactApp from "./pages/ReactApp"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ModalPage from "./pages/ModalPage"
import Portal from "./pages/Portal"

const App = () => {
  return (
    <BrowserRouter>
       
      <UserProvider>
        <ToastContainer/>
      <Routes>   
        <Route path="/" element={<Homepage/>} />
        <Route path="/state-and-props" element={<StateAndProps/>} />
        <Route path="/jsx" element={<Jsx/>} />
        <Route path="/fetch-data" element={<FetchData/>} />
        <Route path="/lifting-state-up" element={<StateLift/>} />
        <Route path="/context-api" element={<ContextApi/>} />
        <Route path="/react-portals" element={<Portal/>} />
        <Route path="/todo" element={<Todo/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="/form" element={<FormPage/>} />
        <Route path="/react-application" element={<ReactApp/>} />
        <Route path="/modal" element={<ModalPage/>} />
      </Routes> 
    </UserProvider>
    </BrowserRouter>
  )
}

export default App
