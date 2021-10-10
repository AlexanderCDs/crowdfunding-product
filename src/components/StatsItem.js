/**
 * @author: alexandercd
 * @date: 10/octubre/2021
 * @description: 
**/
import React from 'react'

export const StatsItem = ( {title, text}) => {
    return (
        <div className="stats-item">
            <h2>{ title }</h2>
            <span>{ text }</span>
        </div>
    )
}

export default StatsItem;