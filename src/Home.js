import React, { Component, useState } from 'react';

const Home = () => {
    const [img, setImg] = useState("");
    const api="https://source.unsplash.com/600x400/?${img}"
    const inputevent = (event) => {
        const data = event.target.value;
        
        setImg(data);
    }
    return (
        <>
            <div className="input-group flex-nowrap" >
                <input type="text" className="form-control" placeholder="Username"
                    onChange={inputevent} value={img} aria-label="Username" aria-describedby="addon-wrapping" />
                  
            </div>
            <img src={'https://source.unsplash.com/600x400/?'+img} alt="tp"/>
        </>
    )
}
export default Home;