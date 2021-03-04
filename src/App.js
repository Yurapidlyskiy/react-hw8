import React from 'react';
import Menu from './Navbar/Menu';
import Main from './Main/Main';
import Footer from './Footer/Footer'

export default function App() {
    return (
        <div>
            <Menu />
            <Main 
            imgLink="https://www.thisiscolossal.com/wp-content/uploads/2018/08/Isopoly_01.gif"
            alt="img"/>
            <Footer ftr="it's"/>
        </div>
    )
}
