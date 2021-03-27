import React from 'react'
import PropTypes from 'prop-types'
import ShopCard from './ShopCard'

function CardsView({cards}) {
    const quantRrows = Math.ceil(cards.length/3);
    let rows = [];
    for (let i=0; i<quantRrows; i++) {
        rows.push(i);
    }
    return (
        rows.map(row => {
            return <div className="flex-container cards" key={row}>
                        {[cards[row*3], cards[row*3+1] || [], cards[row*3+2] || []].map((card, i)=> {
                            return <ShopCard key={row*3+i} card={card}/> || null
                        })    
                    }
            </div>
        }) 

        
    )
}

CardsView.propTypes = {
    cards: PropTypes.array.isRequired
}

export default CardsView

