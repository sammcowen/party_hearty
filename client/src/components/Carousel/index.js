import React from 'react';
import Bday from '../../assets/birthdayjumbo.jpg';
import Club from '../../assets/image.png';
import Grad from '../../assets/gradjumbo.jpg';

function Carousel () {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Club} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Bday} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Grad}className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
        </div>
    );
};

export default Carousel;