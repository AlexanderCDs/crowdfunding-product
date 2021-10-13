/**
 * @author: alexandercd
 * @date: 10/octubre/2021
 * @description: 
**/
import React from 'react'

export const StatsItem = ( {title, text, className = ''}) => {
    return (
        <div className={`stats-item ${className}`.trim()}>
            <h2>{ title }</h2>
            <span>{ text }</span>
        </div>
    )
}

export default StatsItem;