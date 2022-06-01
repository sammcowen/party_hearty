import React from 'react';
import Samm from '../../assets/meetsam.jpg';
import Ulises from '../../assets/meetulises.jpg';
import Michael from '../../assets/meetmichael.png';
import Jim from '../../assets/meetjim.jpg';
function MeetTeamComp() {
    return (
        <div>
        <div className="text">
        <h1>Meet The Team </h1>
        </div>
        
        <div id="carouselExampleCaptions" class="carousel  text" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active rando" aria-current="true" aria-label="Slide 1"></button>
    <button className="rando" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button className="rando" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button className ="rando"type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Michael} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Michael Cortez Mejia</h5>
        <p>UC Berkeley Full Stack Web Dev Grad</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Samm} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Samantha Cowen</h5>
        <p>UC Berkeley Full Stack Web Dev Grad</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Jim} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Jim Nguyen</h5>
        <p>UC Berkeley Full Stack Web Dev Grad</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Ulises} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Ulises Rosas</h5>
        <p>UC Berkeley Full Stack Web Dev Grad</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>
  </div>
  
    );
};

export default MeetTeamComp;