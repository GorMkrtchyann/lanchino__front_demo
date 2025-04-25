import {Route, Routes} from "react-router";
import {Home} from "./pages/home/home";
import {HomeUser} from "./pages/home_user/home_user";
import {LogIn} from "./pages/login/logIn";


function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<HomeUser/>} />
      <Route path="/login" element={<LogIn/>} />
    </Routes>
  );
}

export default App;
