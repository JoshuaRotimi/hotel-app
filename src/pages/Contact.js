import React from "react";
import Header from "../containers/Header/Header";
import ContactPage from "../containers/SubPages/ContactSection/ContactPage";
import Footer from "../containers/Footer/Footer";

const Contact = () => (
    <div>
        <Header header={'Contact Us'} contact={"We'd love to hear from you"}/>
        <ContactPage/>
        <Footer/>
    </div>
);

export default Contact;
