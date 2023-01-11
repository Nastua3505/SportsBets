import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Toast from "./Components/Toast/Toast";
import Page from "./Pages/DetailsPage/Page";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.css";

const App = () => {
  const [selectedBet, setSelectedBet] = useState({});
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);

  const getSelectedBet = (selectedBet) => {
    setSelectedBet(selectedBet);
    setIsNotificationVisible(true);
    setTimeout(() => setIsNotificationVisible(false), 5000);
    alert("Ставка принята");
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="header-logo">Bets</h1>

        <h3 className="header-description">Cтавь и выигрывай!</h3>

        <Link className="link" to="">
          Главная
        </Link>
        <Link className="link" to="">
          Зарегистрироваться
        </Link>
        <Link className="link" to="">
          Войти
        </Link>
      </header>

      {isNotificationVisible && <Toast selectedBet={selectedBet}></Toast>}

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="bets/:id"
          element={<Page getSelectedBet={getSelectedBet} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
