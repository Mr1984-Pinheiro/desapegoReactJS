import React from 'react'
import { Link } from 'react-router-dom'

export default function index() {
    return (
        <div>
            <h2>Page About</h2>
            <Link to="/" >voltar para Home</Link>
        </div>
    )
}
