import React from 'react';
import styles from "./Menu.module.css";

const liStyle= {
  fontSize: "20px",
  textAlign: "center",
  listStyleType: "none",
  color: "white",
};
const ulStyle= {
  width: "300px",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between", 
  
};
const navStyle = {
  display:"flex",
  justifyContent: "center", 
}

export default function Menu() {
  return (
    <div className={styles.menu}>
      <nav style={{...navStyle}}>
        <ul style={{...ulStyle}}>
          <li style={{...liStyle}}>M</li>
          <li style={{...liStyle}}>e</li>
          <li style={{...liStyle}}>n</li>
          <li style={{...liStyle}}>u</li>
        </ul>
      </nav>
    </div>
  )
}

