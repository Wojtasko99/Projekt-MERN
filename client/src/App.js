import { Route, Routes, Navigate } from "react-router-dom"
import Main from "./components/Main"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Form_Movie from "./components/Form_Movie"
import Movies from "./components/Movies"
import Edit from "./components/Edit"
import LoginAdmin from "./components/LoginAdmin"
import EditForms from "./components/Edit_forms"
import CheckUsers from "./components/CheckUsers"



function App() {
  
    const user = localStorage.getItem("token")
    const admin = localStorage.getItem("role")
    
      return (
        <Routes>
          {admin && <Route path="/" exact element={<Main />} />}
          {user && <Route path="/" exact element={<Main />} />}
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/loginAdm" exact element={<LoginAdmin />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          { admin && <Route path="/form" exact element={<Form_Movie />} />}
          { user && <Route path="/form" exact element={<Form_Movie />} />}
          <Route path="/form" element={<Navigate replace to="/login" />} />
          { admin && <Route path="/movies" exact element={<Movies />} />}
          { user && <Route path="/movies" exact element={<Movies />} />}
          <Route path="/movies" exact element={<Navigate replace to="/login" />} />
          { admin  && <Route path="/edit" exact element={<Edit />} />}
          { user  && <Route path="/edit" exact element={<Navigate replace to="/" />} />}
          <Route path="/edit" exact element={<Navigate replace to="/login" />} />
          { admin  && <Route path="/formsEdit" exact element={<EditForms />} />}
          { user  && <Route path="/formsEdit" exact element={<Navigate replace to="/" />} />}
          <Route path="/formsEdit" exact element={<Navigate replace to="/login" />} />
          { admin  && <Route path="/checkUsers" exact element={<CheckUsers />} />}
          { user  && <Route path="/checkUsers" exact element={<Navigate replace to="/" />} />}
          <Route path="/checkUsers" exact element={<Navigate replace to="/login" />} />
        </Routes>

      )
    
  }

export default App