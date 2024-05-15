import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false); // Yeni eklenen state

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/contact', {
                name: name,
                phonenumber: phoneNumber,
                email: email,
                message: message
            });

            console.log(response.data);

            setName('');
            setPhoneNumber('');
            setEmail('');
            setMessage('');
            setSubmitted(true); // Formun başarıyla gönderildiğini belirtmek için submitted state'ini true yap
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div>
            <div className="Contact_section layout_padding">
                <div className="container">
                    <h1 className="categories_text">Geri Dönüş Bildirin</h1>
                    <p className="dummy_text">Aşağıdaki formu doldurararak bizimle iletişime geçebilirsiniz</p>
                    <div className="email_box">
                        <div className="input_main">
                            <form onSubmit={handleSubmit} className="contact-form">
                                {submitted ? ( 
                                    <div className="thank-you-message">
                                        <p>Teşekkürler! Form başarıyla gönderildi.</p>
                                        <Link to="/" className="btn btn-secondary btn-lg">Anasayfa</Link>
                                    </div>
                                ) : (
                                    <>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="form-control"
                                                placeholder="Your name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                                className="form-control"
                                                placeholder="Your phone number"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="form-control"
                                                placeholder="Your email"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                className="form-control"
                                                placeholder="Your message"
                                                required
                                            />
                                        </div>
                                        <div className="form-group"> {}
                                            <div className="send_bt">
                                                <button type="submit">Send</button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
