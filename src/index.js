import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

//.heading {
//    color: #fe9191;
//    text-align: center;
//    text-transform: capitalize;
//    text-decoration: none;
//    font-size: 25px;
//    font-weight: bold;
//    margin: 70px 0;
//    font-family: 'Dancing Script', cursive;
//}

const img1 = "https://picsum.photos/200/300/";
const img2 = "https://picsum.photos/400/300/";
const img3 = "https://picsum.photos/250/300/";
const img4 = "https://picsum.photos/300/300/";
const myWeb = "http://reyajul.zarss.com/";
const heading = {
    color: '#fe9191',
    textAlign: 'center',
    textTransform: 'capitalize',
    textDecoration: 'none',
    fontSize: '25px',
    fontWeight: 'bold',
    margin: '70px 0',
    fontFamily: '"Dancing Script", cursive'
};

ReactDom.render(
    <>
        <h1 style={ heading }>hey guys! now we started to learning react js</h1>
        <div className="images">
            <img src={ img1 } alt="..."/>
            <img src={ img3 } alt="..."/>
            <img src={ img4 } alt="..."/>
        </div>
        <h1 style={ heading }><a href={myWeb} target="_reyajul">Reyajul Islam</a></h1>
    </>,
    document.getElementById('reyajul')
);