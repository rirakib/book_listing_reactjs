import React, { useState } from 'react';
import Breadcrumb from "../../components/Breadcrumb"
import FrontendLayout from "../../layouts/FrontendLayout"

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };


    return (
        <FrontendLayout>
            <section className="container py-5">
                <h2 className="mb-4 text-center">Contact Us</h2>

                {submitted && (
                    <div className="alert alert-success" role="alert">
                        Thank you! Your message has been sent.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="col-12 text-center">
                        <button type="submit" className="btn btn-primary px-5">Send Message</button>
                    </div>
                </form>
            </section>

        </FrontendLayout>
    )
}

export default Contact