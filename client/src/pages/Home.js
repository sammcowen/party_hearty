import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';


const Home = () => {
    return (
        <div>
            <Header/>
            <div className='text'>
                <h2 className='text'>Plan your next event with us ...</h2>
                </div>
            <div className='homestep'>
                <div className="card col-9">
                    <div className="card-body">
                    <i className="fa-solid fa-list-check"></i>   Plan your next birthday, graduation or any CELEBRATION!
                    </div>
                </div>
                <div className="card col-9">
                    <div className="card-body">
                    <i className="fa-solid fa-comment-dollar"></i>  Create a guestlist , add a location, even add a fee for your event!
                    </div>
                </div>
                <div className="card col-9">
                    <div className="card-body">
                    <i className="fa-solid fa-rss"></i>  Post your event publicly or privately.. and keep track of your RSVPS !
                    </div>
                </div>
                </div>
            <Footer/>
        </div>
       

    );
};

export default Home;