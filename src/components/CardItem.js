import React from 'react'

export const CardItem = ({ title, titleRight, paragraph, number = 0, handleClick, active=true}) => {
    return (
        <div className={`card-item ${!active ? 'disbaled' : ''}`}> 
            <div className="card-item-title">
                <h3> { title } </h3>
                <span> { titleRight } </span>
            </div>
            <p> { paragraph } </p>
            <div className="card-footer"> 
                <div className="col left"> 
                    <h2> { number } </h2>
                    <span>left</span>
                </div>
                <div className="col right">
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