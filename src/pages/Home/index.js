import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <div>
            <h1>Home</h1>
            <Link to="/sobre" >Sobre</Link>
        </div>
    )
}
