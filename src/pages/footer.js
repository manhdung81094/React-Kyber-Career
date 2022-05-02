import React from 'react'
import UrlImage from '../image_upload/kyber-logo-text-white.svg'
import '../css/footer.css'
function Footer() {
    return (
        <div>
            <footer className="bg-dark text-center text-white">
                <div className="container">
                    <div className="row pt-5 pb-5">
                        <div className='col-md-4 ps-4'>
                            <img src={UrlImage} className='img-fluid d-flex justify-content-start img-footer' alt='...' />
                        </div>
                        <div className='col-md-4'></div>
                        <div className='col-md-2'>
                            <h5 className='text-white text-start ps-3'>Career</h5>
                            <ul className='list-group'>
                                <li className='list-group-item bg-dark border-0 text-start'>
                                    <a href='#!' className='text-decoration-none text-item-footer'>Team</a>
                                </li>
                                <li className='list-group-item bg-dark border-0 text-start'>
                                    <a href='#!' className='text-decoration-none text-item-footer'>Culture</a>
                                </li>
                                <li className='list-group-item bg-dark border-0 text-start'>
                                    <a href='#!' className='text-decoration-none text-item-footer'>Jobs</a>
                                </li>
                                <li className='list-group-item bg-dark border-0 text-start'>
                                    <a href='#!' className='text-decoration-none text-item-footer'>Blog</a>
                                </li>
                                <li className='list-group-item bg-dark border-0 text-start'>
                                    <a href='#!' className='text-decoration-none text-item-footer'>Gallery</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-md-2'>
                            <h5 className='text-white text-start ps-3'>More</h5>
                            <ul className='list-group'>
                                <li className='list-group-item bg-dark border-0 text-start'>
                                    <a href='#!' className='text-decoration-none text-item-footer'>KyberSwap</a>
                                </li>
                                <li className='list-group-item bg-dark border-0 text-start'>
                                    <a href='#!' className='text-decoration-none text-item-footer'>KyberDAO</a>
                                </li>
                                <li className='list-group-item bg-dark border-0 text-start'>
                                    <a href='#!' className='text-decoration-none text-item-footer'>KyberNetwork</a>
                                </li>
                                <li className='list-group-item bg-dark border-0 text-start'>
                                    <a href='#!' className='text-decoration-none text-item-footer'>Krystal</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='row under-footer'>
                    <div className='col-md-6 d-flex align-items-center justify-content-center'>
                        <span>@ 2021 Kyber Network. All rights reserved.</span>
                    </div>
                    <div className='col-md-6 d-flex align-items-center'>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer;