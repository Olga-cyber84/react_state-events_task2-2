import React, {useState} from 'react'
import PropTypes from 'prop-types'
import IconSwitch from './IconSwitch'
import CardsView from './CardsView';
import ListView from './ListView';

function Store(props) {
    const products = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
      }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
      },{
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
      },{
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
      }];
    
    const icons = ["view_list", "view_module"];    
    const [icon, setIcon] = useState(icons[0]);
    const onIconSwitch = (iconValue) => {
        setIcon(()=>iconValue === icons[0] ? icons[1] : icons[0])
    }
    return (
        <div className="store_block">
            <IconSwitch
                icon={icon}
                onSwitch={onIconSwitch}
            />
            {icon === icons[0] ? <CardsView cards={products} /> : <ListView items={products}/>}            
            
        </div>
    )
}

Store.propTypes = {
  icons: PropTypes.array,
  products: PropTypes.array
}

export default Store

