import Image from 'react-bootstrap/Image';
import { SOCIAL_LINKS, SHOP_LINKS, QUICK_LINKS } from './FooterLinks';
import { Link } from 'react-router-dom';

const QL = QUICK_LINKS.map(({ name, url }, index) =>
    <li className='menu-item' key={index}>
        <Link to={url}>{name}</Link>
    </li>
)

const SL = SHOP_LINKS.map(({ name, url }, index) =>
    <li className='menu-item' key={index}>
        <Link to={url}>{name}</Link>
    </li>
)

export default function AppFooter() {
    return (
        <footer id="colophon" className="site-footer text-white">
            <div className="site-info d-flex w-100 align-items-center">
                <div className="main-footer-content">
                    <div className="site-content__footer-links d-flex justify-content-between">
                        <div>
                            <p>Nuera Wear is a new Athleisure brand for the Kenyan Market, with Pan-African aspirations. Our Brand Vision is to create an apparel brand that unleashes the superstar in you.</p>
                        </div>
                        <div>
                            <h5>Quick Links</h5>
                            <ul>{QL}</ul>

                        </div>
                        <div>
                            <h5>Shop</h5>
                            <ul>{SL}</ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className="m-0">Be social</h3>
                        <ul className="d-flex footer-social justify-content-between">

                        </ul>
                        <span className="small">Built by&nbsp;<a target="_blank" href="<?php echo esc_attr('https://edgarwanjala.co.ke'); ?>">Edgar</a></span>
                    </div>
                </div>
                <div className="newsletter-content position-relative">
                    <div className="instagram-follow position-absolute text-center">
                        <span className="text-uppercase d-block">Follow Us</span>
                        <a className="text-white" target="_blank" aria-describedby="Instagram" href="<?php echo esc_url('https://www.instagram.com/nuerashop?igsh=eDd0dDVldmRuNWVm'); ?>"><h3 className="m-0">@nuerashop</h3></a>
                    </div>

                </div>
            </div>
        </footer>
    )
}