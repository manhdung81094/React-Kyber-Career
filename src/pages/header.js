import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";
import '../css/header.css'
import UrlImage from '../image_upload/kyber-logo.svg'
function Header() {
    return (
        <div className='col-md-12 shadow-sm p-3 mb-5 bg-body rounded pt-0 pb-0'>
            <div className='container'>
                <Nav as="ul" className='menu-header'>
                    <Nav.Item as="li">
                        <Link to="/" className='nav-link'>
                            <img src={UrlImage} className='img-fluid' alt='...' />
                        </Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='item-menu-header d-flex align-items-center'>
                        <Link to="/" className='nav-link'>Home</Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='item-menu-header d-flex align-items-center'>
                        <Link to="/team" className='nav-link'>Team</Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='item-menu-header d-flex align-items-center'>
                        <Link to="/culture" className='nav-link'>Culture</Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='item-menu-header d-flex align-items-center'>
                        <Link to="/job" className='nav-link'>Jobs</Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='item-menu-header d-flex align-items-center'>
                        <Link to="/blog" className='nav-link'>Blog</Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='item-menu-header d-flex align-items-center'>
                        <Link to="/gallery" className='nav-link'>Gallery</Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}
export default Header;