import React, { useState, useEffect } from "react";

function Cypto(props) {
    const [data, setData] = useState("");

    useEffect(() => {
        const url = `https://api.binance.com/api/v1/ticker/24hr?symbol=${props.symbol}`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="row">
            <div className="col-2"><img width="50px" src={props.logo} /></div>
            <div className="col-5">
                <div className="col">{data.symbol}</div>
            </div>
            <div className="col-5">
                <div className="row">
                    <div className="col">{data.lastPrice}</div>
                </div>
                <div className="row">
                    <div className="col">{`${data.priceChangePercent}%`}</div>
                </div>
            </div>
        </div>
    );
}

export default Cypto;
