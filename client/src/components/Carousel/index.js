import React from 'react';
import Bday from '../../assets/birthdayjumbo.jpg';
import Club from '../../assets/image.png';
import Grad from '../../assets/gradjumbo.jpg';

function Carousel () {
    return (
        <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Club} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Bday} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={Grad}class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
        </div>
    );
};

export default Carousel;