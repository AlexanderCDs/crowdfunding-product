/**
 * @author: alexandercd
 * @date: 27/septiembre/2021
 * @description: 
**/
import React from 'react';
import Header from './Header';

const Corwdfund = () => {
    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <h2 className="title">
                             Bamboo Monitor Riser
                        </h2>
                        <p className="description">
                            A beautiful & handcrafted monitor stand to reduce neck and eye strain.
                        </p>
                        <div className="stats">
                            <button className="btn btn-primary">
                                Back this projecty
                            </button> 
                            <button className="btn btn-">
                                Back this projecty
                            </button> 
                            <div className="check bookmark"> 
                                <input type="checkbox" value="false" id="bookmark"/>
                                <label for="bookmark">Bookmark</label>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="card">

                </div>
                
            </div>
        </>
    );
}

export default Corwdfund;