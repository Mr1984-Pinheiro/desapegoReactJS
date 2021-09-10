import React from 'react'
import { Link } from 'react-router-dom'
import { Item } from './styled'

export default (props) => {


    let price = '';

    if (props.data.priceNegotiable) {
        price = 'Preço Negociável';
    } else {
        price = parseInt(props.data.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    return (
        <Item className="aditem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="itemImage">
                    <img src={props.data.image} alt="" />
                </div>
                <div className="itemName">{props.data.title}</div>
                <div className="itemPrice">...</div>
            </Link>
        </Item>
    )
}

