import Image from 'react-bootstrap/Image';

import Navigation from './Nav'
import Noticebar from './NoticeBar'

export default function AppHeader() {
    return (
        <>
            <Noticebar />
            <header id="masthead" className="site-header position-absolute w-100 higher-z-index">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col d-md-none d-sm-block d-flex align-items-center">
                            <a href="/">
                                <img src="" alt="" />
                            </a>
                            <div className="menu-icon toggle-btn" data-target="mobile-menu">
                                <div>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col">
                            <div className="site-branding d-none d-md-block">
                            </div>
                        </div>
                        <div className="col-md-4 d-none d-md-block">
                            <Navigation />
                        </div>
                        <div className="col-md-2 col">
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}