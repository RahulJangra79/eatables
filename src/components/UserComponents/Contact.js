import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <>
        <div className="contact-image">
            <h1 className="contact-image-heading">Contact</h1>
        </div>
        <div className="outer-box-contact">
            <h2 className="contact-heading">Get in touch</h2>
            <p className='contact-para'>The contact form is currently inactive. Get functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.
            </p>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111497.073314389!2d75.67313700648043!3d29.15631570834024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d8011d0c37%3A0x1d3f0df105af1178!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1712046561874!5m2!1sen!2sin" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div className="contact-form-section">
                <div className='contact-form'>
                    <input className='contact-form-name' type='text' placeholder='Your Name'></input>
                    <input className='contact-form-email' type='email' placeholder='Enter Your E-mail'></input>
                    <textarea className='contact-form-message' type='text' placeholder='Your Message'></textarea>

                    <button className="contact-form-submit-button">Submit</button>
                </div>

                <div className='contact-our-details'>
                    <div className='contact-our-details-address'>
                        <i class="fa-solid fa-location-dot"></i>
                        <span className='contact-our-details-span'>Address</span>
                        <p className='contact-our-details-para'>123 Street New York.USA</p>

                    </div>

                    <div className='contact-our-details-mail'>
                        <i class="fa-solid fa-envelope"></i>
                        <span className='contact-our-details-span'>Mail Us</span>
                        <p className='contact-our-details-para'>info@example.com</p>
                    </div>

                    <div className='contact-our-details-phone'>
                        <i class="fa-solid fa-phone"></i>
                        <span className='contact-our-details-span'>Telephone</span>
                        <p className='contact-our-details-para'>(+012) 3456 7890</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact

