import React from 'react'
import PropTypes from 'prop-types'

function ShopCard({card}) {
    return (
        card.name ? (<div className="card" style={{backgroundImage:`url(${card.img})`, backgroundSize: `cover`}}>
            <div className="name">{card.name}</div>
            <div className="color">{card.color}</div>
            <div className="price_btn_block">
                <div className="price">{`$${card.price}`}</div>
                <a href="#">ADD TO CART</a>
            </div>
        </div>) : null
    )
}

ShopCard.propTypes = {
    cards: PropTypes.object
}

export default ShopCard

