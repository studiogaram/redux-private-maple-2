/**
 * Created by garam on 2016. 6. 16..
 */
import React, { PropTypes } from 'react'

const Button = ({ onClick, text }) => (
    <li
        onClick={onClick}
    >
        {text}
    </li>
)

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Button
