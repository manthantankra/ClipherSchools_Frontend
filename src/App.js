import './App.css'
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import SignIn from './pages/SignIn/SignIn';


function App() {



  return (
    <div className="container">

      <Menu />

      <div className='main'>
        <Navbar />

        <div className='main-wrap' >
          <Routes>
            <Route path="/">
              <Route index element={<Home type="random"/>} />
              <Route path='trends' element={<Home type="trend"/>} />
              <Route path='subscriptions' element={<Home type="sub"/>} />
              <Route path="signin" element={<SignIn />} />

              <Route path="video">
                <Route path=":id" element={<Video />} />
              </Route>

            </Route>
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;