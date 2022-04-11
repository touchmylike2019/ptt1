import React from "react";
import Home from "./components/home";
import Markets from "./components/markets";
import Wallets from "./components/wallets";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
    return (
        <div>
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="markets" element={<Markets />} />
                <Route path="wallets" element={<Wallets />} />
            </Routes>
            <nav className="fixed-bottom navbar-light bg-light">
                <div className="container">
                    <div className="row row-cols-5">
                        <div className="col">
                            <Link to="/home">Home</Link>
                        </div>
                        <div className="col">
                            <Link to="/markets">Markets</Link>
                        </div>
                        <div className="col">Trades</div>
                        <div className="col">Futures</div>
                        <div className="col">
                            <Link to="/wallets">Wallets</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default App;
