import React from 'react';
import { SocialIcon } from 'react-social-icons';
const FollowUs = () => {
    return (
        <div>
            <h6>Follow Us</h6>
            <div>
                <SocialIcon url='https://www.linkedin.com/in/ambika-kulanthasamy-a69b68135/' network="linkedin" bgColor="#212529" style={{ height: 20, width: 20, margin:'10px 10px'}}/>
                <SocialIcon url='http://facebook.com/' network="facebook" bgColor="#212529" style={{ height: 20, width: 20, margin:'10px 10px' }}/>
                <SocialIcon url='http://github.com/' network="github" bgColor="#212529" style={{ height: 20, width: 20, margin:'10px 10px' }}/>
                <SocialIcon url='http://codepen.com/' network="codepen" bgColor="#212529" style={{ height: 20, width: 20, margin:'10px 10px' }} />
            </div>
        </div>
    );
};

export default FollowUs;