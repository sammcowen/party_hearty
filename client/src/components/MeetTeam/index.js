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
     

      <div class="card mb-3 teamcard">
        <div class="row g-0">
          <div class="col-md-4">
            <img src={Michael} class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Meet Michael</h5>
              <p class="card-text">He is passionate about social organizing and social justice. Michael also loves music, making music, gaming, and animals.</p>
              <p class="card-text"><small class="text-muted">UC Berkeley Full Stack Web Dev Grad</small></p>
            </div>
          </div>
        </div>
        <div class="card mb-3 teamcard">
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Samm} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Meet Samm </h5>
                <p class="card-text">In addition to taking care of her family, Samantha loves to workout, learn new life hacks, and enjoys all kinds of food and movies!!</p>
                <p class="card-text"><small class="text-muted">UC Berkeley Full Stack Web Dev Grad</small></p>
              </div>
            </div>
          </div>
          <div class="card mb-3 teamcard" >
            <div class="row g-0">
              <div class="col-md-4">
                <img src={Jim} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Meet Jim</h5>
                  <p class="card-text">Jim is a CSS wizard ! When he's not working magic with his code , he loves learning random fun facts ,playing video games and cooking delicious food</p>
                  <p class="card-text"><small class="text-muted">UC Berkeley Full Stack Web Dev Grad</small></p>
                </div>
              </div>
            </div>
            <div class="card mb-3 teamcard">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Ulises} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Meet Ulises </h5>
                    <p class="card-text">Ulises is a natural problem solver.In his free time , Ulises likes to play video games . He also is a huge fan of anime and FOOD!</p>
                    <p class="card-text"><small class="text-muted">UC Berkeley Full Stack Web Dev Grad</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>



  );
};

export default MeetTeamComp;