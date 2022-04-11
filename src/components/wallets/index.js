import React from "react";

function Wallets() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-11">
                    <h1>Wallets</h1>
                </div>
                <div className="col-1">
                    <button type="button" className="btn btn-info">
                        ประวัติ
                    </button>
                </div>
            </div>
            <p>0 THB</p>
            <div className="d-flex gap-3">
                <button type="button" className="btn btn-primary">
                    ฝาก
                </button>
                <button type="button" className="btn btn-danger">
                    ถอน
                </button>
            </div>
        </div>
    );
}

export default Wallets;
