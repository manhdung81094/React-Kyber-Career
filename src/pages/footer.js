import React from 'react'
import UrlImage from '../image_upload/kyber-logo-text-white.svg'
import '../css/footer.css'
import LogoTwitter from '../image_upload/twitter.svg'
import LogoDiscord from '../image_upload/discord.svg'
import LogoTelegram from '../image_upload/telegram.svg'
import LogoM from '../image_upload/medium-footer-icon.svg'
import LogoYoutube from '../image_upload/youtube.svg'
import LogoReddit from '../image_upload/reddit.svg'
import LogoFacebook from '../image_upload/facebook.svg'
import LogoGithub from '../image_upload/github.svg'
import LogoBlockfolio from '../image_upload/ftx.svg'
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
                    <div className='col-md-6 d-flex align-items-center justify-content-center'>
                        <ul class="list-group list-group-horizontal">
                            <li class="list-group-item border-0 bg-logo-footer">
                                <a href='#!'>
                                    <img src={LogoTwitter} className='img-fluid' alt='...' />
                                </a>
                            </li>
                            <li class="list-group-item border-0 bg-logo-footer">
                                <a href='#!'>
                                    <img src={LogoDiscord} className='img-fluid' alt='...' />
                                </a>
                            </li>
                            <li class="list-group-item border-0 bg-logo-footer">
                                <a href='#!'>
                                    <img src={LogoTelegram} className='img-fluid' alt='...' />
                                </a>
                            </li>
                            <li class="list-group-item border-0 bg-logo-footer">
                                <a href='#!'>
                                    <img src={LogoM} className='img-fluid' alt='...' />
                                </a>
                            </li>
                            <li class="list-group-item border-0 bg-logo-footer">
                                <a href='#!'>
                                    <img src={LogoYoutube} className='img-fluid' alt='...' />
                                </a>
                            </li>
                            <li class="list-group-item border-0 bg-logo-footer">
                                <a href='#!'>
                                    <img src={LogoReddit} className='img-fluid' alt='...' />
                                </a>
                            </li>
                            <li class="list-group-item border-0 bg-logo-footer">
                                <a href='#!'>
                                    <img src={LogoFacebook} className='img-fluid' alt='...' />
                                </a>
                            </li>
                            <li class="list-group-item border-0 bg-logo-footer">
                                <a href='#!'>
                                    <img src={LogoGithub} className='img-fluid' alt='...' />
                                </a>
                            </li>
                            <li class="list-group-item border-0 bg-logo-footer">
                                <a href='#!'>
                                    <img src={LogoBlockfolio} className='img-fluid' alt='...' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer;