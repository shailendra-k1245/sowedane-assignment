import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";
import {LoginForm } from "./components/LoginForm/LoginForm";

function App() {
  return <div className="App">
    <Header/>
    <Routes>
      <Route path="/" element={<RegistrationForm/>}/>
      <Route path="/login" element={<LoginForm/>}/>
    </Routes>
  </div>;
}

export default App;
