import React from 'react'
import PropTypes from 'prop-types'

function ShopItem({item}) {
    return (
        item.name ? (<div className="item" style={{backgroundImage:`url(${item.img})`}}>
            {/* <img className="img" src={item.img} /> */}
            <div className="name">{item.name}</div>
            <div className="color">{item.color}</div>
            <div className="price">{`$${item.price}`}</div>
            <a href="#">ADD TO CART</a>
        </div>) : null
    )
}

ShopItem.propTypes = {
    item: PropTypes.object
}

export default ShopItem

