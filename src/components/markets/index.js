import React from "react";
import Cypto from "../cypto"


function Markets() {

    return (
        <div className="container d-grid gap-4">
            <h1 className="text-center">Markets</h1>
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <Cypto symbol="BTCUSDT" logo="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg"/>
            <Cypto symbol="ETHUSDT" logo="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg"/>
            <Cypto symbol="APEUSDT" logo="https://s2.coinmarketcap.com/static/img/coins/64x64/18876.png" />
        </div>
    );
}

export default Markets;
