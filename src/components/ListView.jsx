import React from 'react'
import PropTypes from 'prop-types'
import ShopItem from './ShopItem'

function ListView({items}) {
    return (
        <div className="flex-container items">
            {
                items.map((item, i) => <ShopItem item={item} key={i}/>)
            }
            
        </div>
    )
}

ListView.propTypes = {
    items: PropTypes.array.isRequired
}

export default ListView

