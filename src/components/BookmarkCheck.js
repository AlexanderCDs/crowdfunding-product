/**
 * @author: alexandercd
 * @date: 10/octubre/2021
 * @description: 
**/
import React from 'react'
import { ReactComponent as IconBookmark } from '../assets/svgs/icon-bookmark.svg';
 
export const BookmarkCheck = ( { value, handleChange}) => {
    return (
        <div>  
            <input 
                type="checkbox" 
                value={value} 
                id="bookmark"
                name="bookmark"
                onChange={handleChange}
            />
            <label htmlFor="bookmark" className="check bookmark">
                <span className="icon">
                    <IconBookmark className="icon-bookmark"/>
                </span>
                <span className="label">Bookmark</span>
            </label>
        </div> 
    )
}

export default BookmarkCheck;
