import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleLeft } from 'react-icons/fa';
import '../../css/detail.css'
function Detail() {
    return (
        <div className='container pt-5'>
            <div className='col-md-12 pt-5'>
                <Link to='/' className='detail-icon d-flex align-items-center pt-5'><FaAngleLeft /><span className='detail-title-icon'>Back to searching</span></Link>
                <br />
            </div>
            <div className='col-md-12 pt-3'>
                <h1 className='ps-2'>Blockchain Ecosystem Specialist</h1>
                <div className='category-detail row ps-1 pt-3'>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item border-end border-start-0 border-top-0 border-bottom-0">
                            <span className='detail-title-icon'>Business Unit</span> : Kyber Network
                        </li>
                        <li class="list-group-item border-end border-start-0 border-top-0 border-bottom-0">
                            <span className='detail-title-icon'>Department</span> : Network Team
                        </li>
                        <li class="list-group-item border-end border-start-0 border-top-0 border-bottom-0">
                            <span className='detail-title-icon'>Location</span> : Singapore,Hanoi,HCM,APAC,ROW
                        </li>
                        <li class="list-group-item border-0">
                            <span className='detail-title-icon'>Job type</span> : Full Time
                        </li>
                    </ul>
                </div>
                <div className='btn-detail row ps-1 pt-3'>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item border-0">
                            <button type="button" class="btn btn-detail-item px-5">Apply Now</button>
                        </li>
                        <li class="list-group-item border-0">
                            <button type="button" class="btn btn-detail-item px-5">Share this job</button>
                        </li>
                        <li class="list-group-item border-0">
                            <button type="button" class="btn btn-detail-item px-5">Get in touch</button>
                        </li>
                    </ul>
                </div>
                <div className='row img-banner-detail pt-5'>
                    <img src={require('../../image_upload/banner.jpg')} className='img-fluid' alt='...' />
                </div>
                <div className='row pt-3 detail-content'>
                    <h3>Job Description</h3>
                    <p>We are looking for a talented Product Manager who will take charge of the Kyber Network suite of products (including KyberSwap). This person will be reporting to our Head of Product / Senior Product Manager and will be working very closely with the development team (Smart Contract engineers,Backend/Frontend Engineers, Designers, QA, DevOps, etc.).An important aspect of this role will alose be to collaborate with various cross-functional teams like Marketing, Business Development and R&D.</p>
                </div>
            </div>
            <div className='row pb-5 pt-5'>
                <div className='col-md-3'>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item border-0 ">
                            <Link to='/' className='detail-icon d-flex align-items-center'><FaAngleLeft /><span className='detail-title-icon'>Back to searching</span></Link>
                        </li>
                    </ul>
                </div>
                <div className='col-md-9'>
                    <ul class="list-group list-group-horizontal d-flex justify-content-end">
                        <li class="list-group-item border-0 d-flex align-items-center">
                            <button type="button" class="btn btn-detail-item px-5">Apply Now</button>
                        </li>
                        <li class="list-group-item border-0 d-flex align-items-center">
                            <button type="button" class="btn btn-detail-item px-5">Share this job</button>
                        </li>
                        <li class="list-group-item border-0 d-flex align-items-center">
                            <button type="button" class="btn btn-detail-item px-5">Get in touch</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Detail;
