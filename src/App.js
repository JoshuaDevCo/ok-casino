import Roulette from "./Components/Roulette/index";
import Home from "./Components/Home";
import BlackJack from "./Components/BlackJack";
import NoPage from "./Components/NoPage";
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
          <Route index element={<Home />} />
          <Route path="blackjack" element={<BlackJack />} />
          <Route path="roulette" element={<Roulette />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
