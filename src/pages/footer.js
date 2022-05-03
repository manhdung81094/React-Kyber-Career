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
import ReactTooltip from "react-tooltip";
function Footer() {
    return (
        <div className='col-md-12'>
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
                <div className='row under-footer w-100 ms-0'>
                    <div className='col-md-6 d-flex align-items-center justify-content-center'>
                        <span>@ 2021 Kyber Network. All rights reserved.</span>
                    </div>
                    <div className='col-md-6 d-flex align-items-center justify-content-center'>
                        <ul className="list-group list-group-horizontal">
                            <li className="list-group-item border-0 bg-logo-footer">
                                <a href='#!' data-tip data-for="TwitterToolTip">
                                    <img src={LogoTwitter} className='img-fluid' alt='...' />
                                </a>
                                <ReactTooltip id="TwitterToolTip" place="top" effect="solid">
                                    Follow us on Twitter
                                </ReactTooltip>
                            </li>
                            <li className="list-group-item border-0 bg-logo-footer">
                                <a href='#!' data-tip data-for="DiscordToolTip">
                                    <img src={LogoDiscord} className='img-fluid' alt='...' />
                                </a>
                                <ReactTooltip id="DiscordToolTip" place="top" effect="solid">
                                    Join our Discord group
                                </ReactTooltip>
                            </li>
                            <li className="list-group-item border-0 bg-logo-footer">
                                <a href='#!' data-tip data-for="TelegramToolTip">
                                    <img src={LogoTelegram} className='img-fluid' alt='...' />
                                </a>
                                <ReactTooltip id="TelegramToolTip" place="top" effect="solid">
                                    Follow our Telegram group
                                </ReactTooltip>
                            </li>
                            <li className="list-group-item border-0 bg-logo-footer">
                                <a href='#!' data-tip data-for="MToolTip">
                                    <img src={LogoM} className='img-fluid' alt='...' />
                                </a>
                                <ReactTooltip id="MToolTip" place="top" effect="solid">
                                    Read our blog on Medium
                                </ReactTooltip>
                            </li>
                            <li className="list-group-item border-0 bg-logo-footer">
                                <a href='#!' data-tip data-for="YoutubeToolTip">
                                    <img src={LogoYoutube} className='img-fluid' alt='...' />
                                </a>
                                <ReactTooltip id="YoutubeToolTip" place="top" effect="solid">
                                    Subscribe to our YouTube channel
                                </ReactTooltip>
                            </li>
                            <li className="list-group-item border-0 bg-logo-footer">
                                <a href='#!' data-tip data-for="RedditToolTip">
                                    <img src={LogoReddit} className='img-fluid' alt='...' />
                                </a>
                                <ReactTooltip id="RedditToolTip" place="top" effect="solid">
                                    Follow us on Reddit
                                </ReactTooltip>
                            </li>
                            <li className="list-group-item border-0 bg-logo-footer">
                                <a href='#!' data-tip data-for="FacebookToolTip">
                                    <img src={LogoFacebook} className='img-fluid' alt='...' />
                                </a>
                                <ReactTooltip id="FacebookToolTip" place="top" effect="solid">
                                    Follow us on Facebook
                                </ReactTooltip>
                            </li>
                            <li className="list-group-item border-0 bg-logo-footer">
                                <a href='#!' data-tip data-for="GithubToolTip">
                                    <img src={LogoGithub} className='img-fluid' alt='...' />
                                </a>
                                <ReactTooltip id="GithubToolTip" place="top" effect="solid">
                                    Follow us on Github
                                </ReactTooltip>
                            </li>
                            <li className="list-group-item border-0 bg-logo-footer">
                                <a href='#!' data-tip data-for="BlockfolioToolTip">
                                    <img src={LogoBlockfolio} className='img-fluid' alt='...' />
                                </a>
                                <ReactTooltip id="BlockfolioToolTip" place="top" effect="solid">
                                    Follow us on Blockfolio
                                </ReactTooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer;