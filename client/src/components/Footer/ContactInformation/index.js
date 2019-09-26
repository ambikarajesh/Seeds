import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
const ContactInformation = () => {
    return (
        <div>
            <h6>Contact Information</h6>
            <div className='business_info'>
                <div className='tag'>
                    <FontAwesomeIcon icon={faCompass} className='icon' />
                    <div className='info'>
                        <div>Address</div>
                        <div>Massachusetts-01581</div>
                    </div>
                </div>
                <div className='tag'>
                    <FontAwesomeIcon icon={faPhone} className='icon' />
                    <div className='info'>
                        <div>Phone</div>
                        <div>(805)710-9045</div>
                    </div>
                </div>
                <div className='tag'>
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                    <div className='info'>
                        <div>Email</div>
                        <div>seeds@gmail.com</div>
                    </div>
                </div>
                <div className='tag'>
                    <FontAwesomeIcon icon={faClock} className='icon' />
                    <div className='info'>
                        <div>Time</div>
                        <div>mon-sun:9am to 8pm</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInformation;