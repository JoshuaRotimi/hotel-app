import React, {Component} from "react";
import TextInput from "./TextInput";
import './contact-page.css';
import {withRouter} from 'react-router-dom';


class ContactPage extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
        errors: {}
    };

    componentDidMount() {
        console.log(this.props.history)
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();

        const {name, email, phone, message} = this.state;

        if (name === '') {
            this.setState({errors: {name: 'Name is required'}});
            return;
        }
        if (email === '') {
            this.setState({errors: {email: 'Email is required'}});
            return;
        }
        if (phone === '') {
            this.setState({errors: {phone: 'Phone is required'}});
            return;
        }

        if (message === '') {
            this.setState({errors: {message: 'Message is required'}});
            return;
        }

        // const newContact = {
        //     name,
        //     email,
        //     phone,
        //     errors: {}
        // };


        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');

    };


    render() {
        const {name, email, phone, message, errors} = this.state;

        return (
            <main className='contact-main'>
                <section className='contact-info'>
                    <div className='address-book'>
                        <h1 className='contact-header'>Address</h1>
                        <p className='contact-text'>6, Kingsway Road, Ikoyi Lagos</p>
                    </div>
                    <div className='address-book'>
                        <h1 className='contact-header'>Phone</h1>
                        <p className='contact-text'>+234-567-890-456</p>
                        <p className='contact-text'> +234-098-765-432</p>
                    </div>
                    <div className='address-book'>
                        <h1 className='contact-header'>Email</h1>
                        <p className='contact-text'>enquiries@romaniahotels.com</p>
                    </div>
                </section>
                <section className='section-contact'>
                    <h1 className='contact-header'>Drop a message.</h1>
                    <form action="" onSubmit={this.onSubmit}>
                        <TextInput
                            label={'Name'}
                            name={'name'}
                            value={name}
                            type={'text'}
                            onChange={this.onChange}
                            errors={errors.name}
                        />
                        <TextInput
                            label={'Email'}
                            name={'email'}
                            value={email}
                            type={'email'}
                            onChange={this.onChange}
                            errors={errors.email}
                        />
                        <TextInput
                            label={'Phone'}
                            name={'phone'}
                            value={phone}
                            type={'text'}
                            onChange={this.onChange}
                            errors={errors.phone}
                        />
                        <TextInput
                            label={'Message'}
                            name={'message'}
                            value={message}
                            type={'text'}
                            onChange={this.onChange}
                            errors={errors.message}
                        />
                        <button className='footer-button'>Send</button>
                    </form>

                </section>

            </main>
        )

    }
}

export default withRouter(ContactPage);
