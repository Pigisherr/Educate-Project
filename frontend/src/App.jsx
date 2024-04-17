import { Routes, Route } from "react-router-dom";
import Frontpage from "./Frontpage";
import Login from "./Login";
import SignUp from "./SignUp";
import Menu from "./Menu";
import Chat from "./Chat";
import Classroom from "./Classroom";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontpage />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/SignUp" element={<SignUp />}></Route>
      <Route path="/Menu" element={<Menu />}></Route>
      <Route path="/Chat" element={<Chat />}></Route>
      <Route path="/Classroom" element={<Classroom />}></Route>
    </Routes>
  );
}

export default App;
