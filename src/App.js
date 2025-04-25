import {Route, Routes} from "react-router";
import {Home} from "./pages/home/home";
import {HomeUser} from "./pages/home_user/home_user";


function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/" element={<HomeUser/>} />
    </Routes>
  );
}

export default App;
