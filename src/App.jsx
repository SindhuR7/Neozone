import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Items from "./pages/Items"
import { Provider } from "./assets/ContextApi"
import AdDetails from "./components/AdDetails"

function App() {

  return (
    <>
     <BrowserRouter>
     <Provider>
     <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/items" element={<Items/>}/>
      <Route path="/ad-details/:id" element={<AdDetails />} />
     </Routes>
     </Provider>
     </BrowserRouter>
    </>
  )
}

export default App
