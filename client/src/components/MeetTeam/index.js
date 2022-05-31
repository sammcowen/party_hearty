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
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active rando" aria-current="true" aria-label="Slide 1"></button>
    <button class="rando" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button class="rando" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button class ="rando"type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Michael} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Michael Cortez Mejia</h5>
        <p>UC Berkeley Full Stack Web Dev Grad</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Samm} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Samantha Cowen</h5>
        <p>UC Berkeley Full Stack Web Dev Grad</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Jim} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Jim Nguyen</h5>
        <p>UC Berkeley Full Stack Web Dev Grad</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Ulises} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Ulises Rosas</h5>
        <p>UC Berkeley Full Stack Web Dev Grad</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev rando" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next rando" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
  </div>
  
    );
};

export default MeetTeamComp;