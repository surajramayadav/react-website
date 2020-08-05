import React from 'react';

const Cardlist = (props) => {

    return (
        
                <div className="card">
                    <img src={props.img} className="card-img-top" alt="yo" />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.job}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
           
    )
}
export default Cardlist;