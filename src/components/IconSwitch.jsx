import React from 'react'
import PropTypes from 'prop-types'

function IconSwitch(props) {
    const {icon} = props;
    const onSwitch = (icon) => {
        props.onSwitch(icon.target.innerHTML)
    }
    return (
        <div className="switch_block">
            <span className="material-icons" onClick={onSwitch}>
                {icon}
            </span>
        </div>  
    )
}

IconSwitch.propTypes = {
    icon: PropTypes.string.isRequired,
    onSwitch: PropTypes.func
}

export default IconSwitch

