import {Route, Routes} from "react-router";
import {Home} from "./pages/home/home";
import {HomeUser} from "./pages/home_user/home_user";
import {LogIn} from "./pages/login/logIn";
import {SignUp} from "./pages/signup/signUp";
import {Store} from "./pages/store/store";


function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<HomeUser/>} />
      <Route path="/store" element={<Store/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes>
  );
}

export default App;
