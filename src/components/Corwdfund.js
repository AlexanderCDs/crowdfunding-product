/**
 * @author: alexandercd
 * @date: 27/septiembre/2021
 * @description: 
**/
import React from 'react';
import BookmarkCheck from './BookmarkCheck';
import StatsItem from './StatsItem';
import Header from './Header';

const Corwdfund = () => {
    return (
        <>
            <Header></Header>
            <section className="container">
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
                            <BookmarkCheck 
                                value={false} 
                            />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="stats">
                            <StatsItem 
                                title="$89,914"
                                text="of $11000.000 backed"
                            />
                            <StatsItem 
                                title="5,007"
                                text="total backers"
                            />
                            <StatsItem 
                                title="56"
                                text="day left"
                            />  
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="card-item">
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Corwdfund;