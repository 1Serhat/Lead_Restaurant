import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <p>&copy; Serhat Altay</p>
            </div>
            <div className="socialMediaIcon">
                <Link
                    class='social-icon-link github'
                    to={{ pathname: "https://facebook.com" }}
                    target='_blank'
                    aria-label='Github'
                >
                    <i class='fab fa-facebook' />
                </Link>
                <Link
                    class='social-icon-link codepen'
                    to={{ pathname: "https://codepen.io" }}
                    target='_blank'
                    aria-label='Codepen'
                >
                    <i class='fab fa-codepen' />
                </Link>
                <Link
                    class='social-icon-link Linkedin'
                    to={{ pathname: "https://www.linkedin.com" }}
                    target='_blank'
                    aria-label='LinkedIn'
                >
                    <i class='fab fa-linkedin' />
                </Link>
            </div>
        </div>
    )
}

export default Footer
