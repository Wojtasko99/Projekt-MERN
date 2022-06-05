import { Route, Routes, Navigate } from "react-router-dom"
import Main from "./components/Main"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Form_Movie from "./components/Form_Movie"
import Movies from "./components/Movies"
import Edit from "./components/Edit"
import LoginAdmin from "./components/LoginAdmin"


function App() {
  
    const user = localStorage.getItem("token")
    return (
      <Routes>
        {user && <Route path="/" exact element={<Main />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/loginAdm" exact element={<LoginAdmin />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        { user && <Route path="/form" exact element={<Form_Movie />} />}
        <Route path="/form" element={<Navigate replace to="/login" />} />
        { user && <Route path="/movies" exact element={<Movies />} />}
        <Route path="/movies" exact element={<Navigate replace to="/login" />} />
        { user && <Route path="/edit" exact element={<Edit />} />}
        <Route path="/edit" exact element={<Navigate replace to="/login" />} />
      </Routes>
    )
  }

export default App