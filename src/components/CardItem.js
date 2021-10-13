import React from 'react'

export const CardItem = ({ title, titleRight, paragraph, number = 0, handleClick, active=true}) => {
    return (
        <div className={`card-item ${!active ? 'disbaled' : ''}`}> 
            <div className="row card-item-title">
                <h4> { title } </h4>
                <span className="price"> { titleRight } </span>
            </div>
            <p className="description"> { paragraph } </p>
            <div className="row card-footer"> 
                <div className="col"> 
                    <span className="number"> { number } </span>
                    <span>left</span>
                </div>
                <div className="col">
                    <button 
                        className={`btn btn-${active ? 'primary' : 'disabled'}`}
                        onClick={handleClick}
                    >
                        { active ? 'Select Reward' : 'Out of stock' } 
                    </button>
                </div>  
            </div>
        </div>
    )
}

export default CardItem;