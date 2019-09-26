import React from 'react';
import { SocialIcon } from 'react-social-icons';
const FollowUs = () => {
    return (
        <div>
            <h6>Follow Us</h6>
            <div>
                <SocialIcon url='https://youtube.com/' network="youtube" bgColor="#212529" style={{ height: 20, width: 20, margin:'10px 10px'}}/>
                <SocialIcon url='http://facebook.com/' network="facebook" bgColor="#212529" style={{ height: 20, width: 20, margin:'10px 10px' }}/>
                <SocialIcon url='https://twitter.com/' network="twitter" bgColor="#212529" style={{ height: 20, width: 20, margin:'10px 10px' }}/>
                <SocialIcon url='https://plus.google.com/' network="google" bgColor="#212529" style={{ height: 20, width: 20, margin:'10px 10px' }} />
            </div>
        </div>
    );
};

export default FollowUs;