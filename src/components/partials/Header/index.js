import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderArea } from './styled'



const Header = () => {
    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo1">D</span>
                        <span className="logo2">S</span>
                        <span className="logo3">P</span>
                        <span className="logo4">G</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Login</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Cadastrar</Link>
                        </li>
                        <li>
                            <Link to="" className="button">Poste um anúncio</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    )
}

export default Header;
