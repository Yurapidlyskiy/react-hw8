import React from 'react';
import styles from './Main.module.css';

const imgStyle={
    width: "100%",
    height: "800px",
};

const spanStyle={
    textAlign:"center",
    fontSize:"16px",
    display:"flex",
    justifyContent: 'center',
    height:"100px",
    color:"white"
};

export default function Main({imgLink, alt}) {
    return (
        <div className={styles.main}>
                <img style={{...imgStyle}} src={imgLink} alt={alt}/>
                <div><span style={{...spanStyle}}>Main is louding...</span></div>
        </div>
    )
}

Main.defaultProps={
    imgLink: "https://i.pinimg.com/originals/05/91/c7/0591c7d9ed972c451f02e9d52199f1d6.gif",
    alt : "bad conection"
}