import React from "react";

 const CardBody = () => (
    <div>
        <div className="card" style={{ height: 300, width: 500, margin: 10 }}>
        <div className="card-header" style={{ textAlign: "center" }}>
            Featured
        </div>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
)

export default CardBody

