import React from "react";
import Nav from "../Nav";
import Carousel from "../Carousel";

function Header () {

    return(
        <>
        <div className='text'>
            <h1 className="text">Party Hearty</h1>
        </div>
        <Carousel/>
        <Nav/>
        </>

    );
};

export default Header;