import React from "react";
import Header from "../containers/Header/Header";
import Checkout from "../containers/Checkout/Checkout";
import Rooms from "../containers/Rooms/Rooms";
import Footer from "../containers/Footer/Footer";
import Facilities from "../containers/Facilities/Facilities";

const Landing = () => {
    return (
        <div>
            <Header paragraph={'Welcome to Hotel Romania'} header={'Experience Home Away From Home'}/>
            <Checkout/>
            <Rooms/>
            <Facilities/>
            <Footer/>
        </div>
    )
};

export default Landing;