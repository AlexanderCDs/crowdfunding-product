/**
 * @author: alexandercd
 * @date: 27/septiembre/2021
 * @description: 
**/
import React from 'react';
import BookmarkCheck from './BookmarkCheck';
import StatsItem from './StatsItem';
import Header from './Header';
import CardItem from './CardItem';
import logo from '../assets/svgs/logo-mastercraft.svg';

const CrowdfundApp = () => {
    return (
        <>
            <Header></Header>
            <section className="container"> 
                <div className="card card-head">
                    <div className="card-image-logo">
                        <img alt="mastercraft" src={logo} width="45" height="45"></img>
                    </div>
                    <div className="card-content">
                        <h2 className="title">
                            Mastercraft Bamboo Monitor Riser
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
                        <p>
                            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates
                            your screen to a more comfortablle viewing height. Plancing your monitor at eye level has
                            the potential to improve your posture and make you more comfortable while at work,
                            helping you stay focused on the task at hand.
                        </p>
                        <CardItem 
                            title='Bamboo Stand'
                            titleRight='Pledge $25 or more'
                            paragraph={`You get an ergonomic stand made of natural bamboo. You've helped us launch 
                            our promotional campaign, and you'll be added to a special Backer member list.`}
                            number='101' 
                        /> 

                        <CardItem 
                            title='Bamboo Edition Stand'
                            titleRight='Pledge $75 or more'
                            paragraph={`You get an ergonomic stand made of natural bamboo. You've helped us launch 
                            our promotional campaign, and you'll be added to a special Backer member list.`}
                            number='64' 
                        />  

                        <CardItem 
                            title='Mahogany Special Edition'
                            titleRight='Pledge $200 or more'
                            paragraph={`You get an ergonomic stand made of natural bamboo. You've helped us launch 
                            our promotional campaign, and you'll be added to a special Backer member list.`}
                            active={false}
                        />     
                    </div>
                </div>
            </section>
        </>
    );
}

export default CrowdfundApp;