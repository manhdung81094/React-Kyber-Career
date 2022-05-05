import React, { useState } from 'react'
import { FaUpload } from 'react-icons/fa'
import '../../css/job.css'


function Job() {
    const [count, setCount] = useState('');
    return (
        <div className='container pt-5'>
            <div className='row pt-5'>
                <div className='col-md-8 mx-auto pt-5'>
                    <h1 className='text-center'>Kyber Network job application</h1>
                    <div className='row pt-5'>
                        <div className='col-md-6 pt-3'>
                            <div className="mb-3">
                                <label htmlFor="first-name" className="form-label txt-color-job">First Name *</label>
                                <input type="text" className="form-control border-0 bg-color-input-job ps-3 pt-2 pb-2" id="first-name" placeholder="Your First Name (Family Name)" />
                            </div>
                        </div>
                        <div className='col-md-6 pt-3'>
                            <div className="mb-3">
                                <label htmlFor="last-name" className="form-label txt-color-job">Last Name *</label>
                                <input type="text" className="form-control border-0 bg-color-input-job ps-3 pt-2 pb-2" id="last-name" placeholder="Your Last Name (Given Name)" />
                            </div>
                        </div>
                        <div className='col-md-6 pt-3'>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label txt-color-job">Email Address *</label>
                                <input type="text" className="form-control border-0 bg-color-input-job ps-3 pt-2 pb-2" id="email" placeholder="Your Email Address" />
                            </div>
                        </div>
                        <div className='col-md-6 pt-3'>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label txt-color-job">Phone Number *</label>
                                <div className="input-group mb-3">
                                    <div className='col-md-3 p-0 w-25'>
                                        <select className="form-select border-0 h-100 bg-select-job rounded-0" id="phone-select" disabled>
                                            <option>+84</option>
                                        </select>
                                    </div>
                                    <div className='col-md-9 p-0 w-75'>
                                        <input type="text" className="form-control border-0 bg-color-input-job ps-3 pt-2 pb-2 rounded-0" id="phone" placeholder="Your Phone Number" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 pt-3'>
                            <div className="mb-3">
                                <label htmlFor="apply" className="form-label txt-color-job">Apply Position *</label>
                                <select className="form-select border-0 bg-select-job-no-border rounded-0" id="apply" disabled>
                                    <option>Senior Site Reliability Engineering</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-6 pt-3'>
                            <div className="mb-3">
                                <label htmlFor="telegram" className="form-label txt-color-job">Your Telegram Account (Optional) *</label>
                                <input type="text" className="form-control border-0 bg-color-input-job ps-3 pt-2 pb-2" id="telegram" placeholder="Your Telegram Account if you have one" />
                            </div>
                        </div>
                        <div className='col-md-6 pt-3'>
                            <div className="mb-3">
                                <label htmlFor="question" className="form-label txt-color-job">How do you know about our job openings? *</label>
                                <select className="form-select border-0 bg-select-job-no-border rounded-0" id="question" disabled>
                                    <option>Choose the most fitting answer</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-6 pt-3'>
                            <div className="mb-3">
                                <label htmlFor="social" className="form-label txt-color-job">Your Website/Social Meida (Optional) *</label>
                                <input type="text" className="form-control border-0 bg-color-input-job ps-3 pt-2 pb-2" id="social" placeholder="Your other social media account" />
                            </div>
                        </div>
                        <div className='col-md-12 pt-3'>
                            <div className="mb-3">
                                <label htmlFor="upload" className="form-label txt-color-job">Your CV/Resume *</label>
                                <div className="searchbox-wrap col-md-12">
                                    <input type="text" className="pt-2 pb-2" placeholder="Upload your CV here. File type: PNG,JPG,PDF,DOC,DOCX File size: Maximum 100MB" />
                                    <button>
                                        <span><FaUpload className='icon-upload'/> Upload file</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12 pt-3 pb-5'>
                            <div className="mb-5 row">
                                <label htmlFor="transcript" className="form-label txt-color-job">Transcript (Optional) *</label>
                                <div className='col-md-9 p-0 w-75'>
                                    <input type="text" className="form-control border-0 bg-color-input-job ps-3 pt-2 pb-2" onChange={e => setCount(e.target.value)} maxLength="120" id="transcript" placeholder="Write something about yourself here if you really want it. Feel free to write anything." />
                                </div>
                                <div className='col-md-3 p-0 w-25'>
                                    <input type="text" className="form-control border-0 bg-color-input-job ps-3 pt-2 pb-2 text-end" id="count-txt" placeholder={count.length + '/120'} />
                                </div>
                            </div>
                            <button type="button" class="btn btn-detail-item px-5 float-end">Submit Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Job;