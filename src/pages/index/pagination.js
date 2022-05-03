import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import '../../css/pagination.css'
function PhanTrang() {
    return (
        <div className="pagination p1 d-flex justify-content-center">
            <ul>
                <Link to="/"><li><FaAngleLeft /></li></Link>
                <Link className="is-active" to="/"><li>1</li></Link>
                <Link to="/"><li>2</li></Link>
                <Link to="/"><li>3</li></Link>
                <Link to="/"><li>4</li></Link>
                <Link to="/"><li>5</li></Link>
                <Link to="/"><li>6</li></Link>
                <Link to="/"><li><FaAngleRight /></li></Link>
            </ul>
        </div>
    )
}

export default PhanTrang;

