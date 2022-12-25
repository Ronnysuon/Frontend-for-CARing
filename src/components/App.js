import React from "react";
import NotesPage from "../pages/NotesPage";
import LoginPage from "../pages/LoginPage";
import {BrowserRouter , Route, Routes, Link} from 'react-router-dom';
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import Dash from "./Dash";
import Search from "./Search";
import Navbar from "./Navbar";
function App() {

  return (
    <div class="App">
      <BrowserRouter>

    <Navbar/>
    
      <Routes>
        <Route index element={<RequireAuth><NotesPage/></RequireAuth>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/logout" element={<RequireAuth><LogoutPage/></RequireAuth>}/>
        <Route path="/dash" element={<Dash/>}/>
        <Route path="/search" element={<RequireAuth><Search/></RequireAuth>}/>
      </Routes>
   
      </BrowserRouter>
    </div>

   

  );
  
}

export default App;