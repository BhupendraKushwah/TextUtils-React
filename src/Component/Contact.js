import React from 'react'

export default function Contact(props) {
    return (
        <>
            <section id="contact" className={`parallax-section ${props.mode === 'light' ? 'text-black' : 'text-white'}`}>
                <div className="container">
                    <div className="row">

                        <div className="col-md-12 col-sm-12">

                            <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                                <h2>Get in touch</h2>
                            </div>
                        </div>

                        <div className="col-md-7 col-sm-10">

                            <div className="wow fadeInUp" data-wow-delay="0.4s">
                                <form id="contact-form" action="#" method="get">
                                    <div className="col-md-6 col-sm-6">
                                        <input type="text" className={`form-control h-auto ${props.mode === 'dark' ? 'bg-dark' : 'bg-body-tertiary'} ${props.mode === 'light' ? 'text-black' : 'text-white placeholder'}`} name="name" placeholder="Name" required="" />
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <input type="email" className={`form-control h-auto ${props.mode === 'dark' ? 'bg-dark' : 'bg-body-tertiary'} ${props.mode === 'light' ? 'text-black' : 'text-white placeholder'}`} name="email" placeholder="Email" required="" />
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <textarea className={`form-control h-auto ${props.mode === 'dark' ? 'bg-dark' : 'bg-body-tertiary'} ${props.mode === 'light' ? 'text-black' : 'text-white placeholder'}`} rows="5" name="message" placeholder="Message" required="" placeholderTextColor="#fff" ></textarea>
                                    </div>
                                    <div className="col-md-offset-8 col-md-4 col-sm-offset-6 col-sm-6">
                                        <button id="submit" type="submit" className="form-control" name="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-8">

                            <div className="wow fadeInUp contact-info" data-wow-delay="0.4s">
                                <div className="section-title">
                                    <h2>Contact Info</h2>
                                    <p>TextUtils is your one-stop destination for all your text transformation needs. Whether you're a writer, student, or professional, our user-friendly website offers a wide range of tools to help you manipulate and enhance your text in various ways.</p>
                                </div>

                                <p><i className="fa fa-map-marker"></i> Kushwah Colony Pinto park Morar Gwalior</p>
                                <p><i className="fa fa-comment"></i> <a href="mailto:bhupendrakushwah@gmail.com">bhupendrakushwah@gmail.com</a></p>
                                <p><i className="fa fa-phone"></i> +91-9770239467</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
