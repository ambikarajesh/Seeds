import React from 'react';
import Logo from '../Header/Toolbar/Logo';
import ProductCategories from './ProductCategories';
import ContactInformation from './ContactInformation';
import FollowUs from './FollowUs';
const Footer = () => {
    return (
        <footer>
           <Logo/>
           <div className='footer_items'>
                <ProductCategories/>
                <ContactInformation/>
                <FollowUs/>
           </div>
           <p  style={{paddingTop:'15px'}}>&copy; 2019 Seeds. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;