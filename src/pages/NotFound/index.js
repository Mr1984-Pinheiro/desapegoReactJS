import React from 'react'
import { Link } from 'react-router-dom'

export default function Page() {
    return (
        <div>
            <h1>Pagina não encontrada</h1>
            <Link to="/" >Voltar para Home</Link>
        </div>
    )
}
