import React from 'react'
import Nav from 'react-bootstrap/Nav'
import '../css/header.css'
import UrlImage from '../image_upload/kyber-logo.svg'
import Search from '../pages/search.js'
function Header() {
    return (
        <>
            <div className='container'>
                <Nav as="ul" className='menu-header'>
                    <Nav.Item as="li">
                        <Nav.Link href="#">
                            <img src={UrlImage} className='img-fluid' alt='...' />
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='item-menu-header d-flex align-items-center'>
                        <Nav.Link href="#">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='item-menu-header d-flex align-items-center'>
                        <Nav.Link href="#">Team</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='item-menu-header d-flex align-items-center'>
                        <Nav.Link href="#">Culture</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='item-menu-header d-flex align-items-center'>
                        <Nav.Link href="#">Jobs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='item-menu-header d-flex align-items-center'>
                        <Nav.Link href="#">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" className='item-menu-header d-flex align-items-center'>
                        <Nav.Link href="#">Gallery</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <Search />
        </>
    )
}
export default Header;