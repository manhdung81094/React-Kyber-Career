import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleLeft, FaTelegramPlane, FaLinkedinIn, FaFacebookF, FaEnvelope, FaTimes } from 'react-icons/fa'
import { Modal } from 'react-bootstrap'

import '../../css/detail.css'
function Detail() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='container pt-5'>
            <div className='col-md-12 pt-5'>
                <Link to='/' className='detail-icon d-flex align-items-center pt-5'><FaAngleLeft /><span className='detail-title-icon'>Back to searching</span></Link>
                <br />
            </div>
            <div className='col-md-12 pt-3'>
                <h1 className='ps-2'>Blockchain Ecosystem Specialist</h1>
                <div className='category-detail row ps-1 pt-3'>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item border-end border-start-0 border-top-0 border-bottom-0">
                            <span className='detail-title-icon'>Business Unit</span> : Kyber Network
                        </li>
                        <li className="list-group-item border-end border-start-0 border-top-0 border-bottom-0">
                            <span className='detail-title-icon'>Department</span> : Network Team
                        </li>
                        <li className="list-group-item border-end border-start-0 border-top-0 border-bottom-0">
                            <span className='detail-title-icon'>Location</span> : Singapore,Hanoi,HCM,APAC,ROW
                        </li>
                        <li className="list-group-item border-0">
                            <span className='detail-title-icon'>Job type</span> : Full Time
                        </li>
                    </ul>
                </div>
                <div className='btn-detail row ps-1 pt-3'>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item border-0">
                            <button type="button" className="btn btn-detail-item px-5">Apply Now</button>
                        </li>
                        <li className="list-group-item border-0">
                            <button type="button" className="btn btn-detail-item px-5">Share this job</button>
                        </li>
                        <li className="list-group-item border-0">
                            <button type="button" className="btn btn-detail-item px-5" onClick={handleShow}>Get in touch</button>
                        </li>
                    </ul>
                </div>
                <div className='row img-banner-detail pt-5'>
                    <img src={require('../../image_upload/banner.jpg')} className='img-fluid' alt='...' />
                </div>
                <div className='row pt-3 detail-content'>
                    <h3>Job Description</h3>
                    <p>We are looking for a talented Product Manager who will take charge of the Kyber Network suite of products (including KyberSwap). This person will be reporting to our Head of Product / Senior Product Manager and will be working very closely with the development team (Smart Contract engineers,Backend/Frontend Engineers, Designers, QA, DevOps, etc.).An important aspect of this role will alose be to collaborate with various cross-functional teams like Marketing, Business Development and R&D.</p>
                    <p>The ideal Product Manager will assist in product development by identifying potential features; conduct market research; generate product requirements; determine product specifications; create product launch plans and assist in developing marketing strategies.</p>
                    <p>The Product Manager should be okay with ambiguity and willing to get their hands dirty. This person needs to be comfortable communicating with teams in different geographies. Project management is also an extremely important part of this role.</p>
                    <h3>Job Responsibilities</h3>

                </div>
            </div>
            <div className='row pb-5 pt-5'>
                <div className='col-md-3'>
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item border-0 ">
                            <Link to='/' className='detail-icon d-flex align-items-center'><FaAngleLeft /><span className='detail-title-icon'>Back to searching</span></Link>
                        </li>
                    </ul>
                </div>
                <div className='col-md-9'>
                    <ul className="list-group list-group-horizontal d-flex justify-content-end">
                        <li className="list-group-item border-0 d-flex align-items-center">
                            <button type="button" className="btn btn-detail-item px-5">Apply Now</button>
                        </li>
                        <li className="list-group-item border-0 d-flex align-items-center">
                            <button type="button" className="btn btn-detail-item px-5">Share this job</button>
                        </li>
                        <li className="list-group-item border-0 d-flex align-items-center">
                            <button type="button" className="btn btn-detail-item px-5" onClick={handleShow}>Get in touch</button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header className='border-0' closeButton>
                                    <p className='txt-modal'>Please contact out to us</p>
                                </Modal.Header>
                                <Modal.Body className='border-0 p-0'>
                                    <div className='row'>
                                        <div className='col-md-3'>
                                            <Link to='/' className='link-modal'>
                                                <div className='col-md-12 d-flex justify-content-center'>
                                                    <FaTelegramPlane className='icon-modal' />
                                                </div>
                                                <p className='txt-title-modal pt-3 text-center'>Telegram</p>
                                            </Link>
                                        </div>
                                        <div className='col-md-3'>
                                            <Link to='/' className='link-modal'>
                                                <div className='col-md-12 d-flex justify-content-center'>
                                                    <FaEnvelope className='icon-modal' />
                                                </div>
                                                <p className='txt-title-modal pt-3 text-center'>Email</p>
                                            </Link>
                                        </div>
                                        <div className='col-md-3'>
                                            <Link to='/' className='link-modal'>
                                                <div className='col-md-12 d-flex justify-content-center'>
                                                    <FaFacebookF className='icon-modal' />
                                                </div>
                                                <p className='txt-title-modal pt-3 text-center'>Facebook</p>
                                            </Link>
                                        </div>
                                        <div className='col-md-3'>
                                            <Link to='/' className='link-modal'>
                                                <div className='col-md-12 d-flex justify-content-center'>
                                                    <FaLinkedinIn className='icon-modal' />
                                                </div>
                                                <p className='txt-title-modal pt-3 text-center'>Linkedin</p>
                                            </Link>
                                        </div>
                                    </div>
                                </Modal.Body>
                                <Modal.Footer className='border-0 pt-0'>

                                </Modal.Footer>
                            </Modal>
                        </li>
                    </ul>
                </div>
            </div>

        </div >
    )
}


export default Detail;
