import React from 'react';
const imgSrc = process.env.PUBLIC_URL + "/dictionary.jpg"
const InitialView = () => {

    return (
        <div>
            <h2>hello!</h2>
            <h3> here you can query our dictionary by searching one letter.</h3>
            <img src={imgSrc} alt="dictionary" />
        </div>)
}
export default InitialView;