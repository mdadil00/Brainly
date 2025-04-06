import { Dashboard } from "./pages/DashBoard"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { SignUp } from "./pages/SignUp"
import { SignIn } from "./pages/SignIn"


function App() {
  // return <Dashboard/>
  // return <SignUp />
  return <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/signin" element={<SignIn/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
    </Routes>
  </BrowserRouter>
}


export default App
