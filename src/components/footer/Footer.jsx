 // Optional for styling
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                
                <div className='Three-FooterBox'>
                    <div className='footer-bottom'>
                        <Link to="/terms">Terms & Conditions</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/about us">About Us</Link>
                    </div>
                    <div className="footer-social">
                        <h3>Fly Charter</h3>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                        <div className='vertical-line'></div>
                    </div>
                    <div className='footer-bottom'>
                        <Link to="/our services">our services</Link>
                        <Link to="/contact us">contact us</Link>
                    </div>
                </div>
            </div>
        <p>© {new Date().getFullYear()} Fly charters. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
