import "./App.css";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      {
        // Code here
      }
     <Routes>

<Route path="/" element={<Home/>}>  </Route>
<Route path="/" element={<Login/>}>  </Route>

       </Routes>
     


    </div>
  );
}

export default App;
