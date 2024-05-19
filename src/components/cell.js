import React from 'react'

const Cell = ({filled,onClick}) => {
    return (
        <button 
        type='button'
        onClick={onClick}
        className={filled ? "cell cell-activated" : "cell"}>

        </button>
    )
}

export default Cell;
