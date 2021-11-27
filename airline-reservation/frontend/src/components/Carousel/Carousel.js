import './Carousel.css';
import React from 'react'
import  Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import Carousel from 'react-bootstrap/Carousel';
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../images/carousel1.jpg'
import image2 from '../../images/carousel2.jpg'
import image3 from '../../images/carousel3.jpg'
import image4 from '../../images/carousel4.jpg'
import image5 from '../../images/carousel5.jpg'
import image6 from '../../images/carousel6.jpg'


const CarouselFunc = () => {
  const imagesList = [
    {pic: image1, text: "Burger"},
    {pic: image2, text: "Pizza"},
    {pic: image3, text: "Sushi"},
    {pic: image4, text: "Pasta"},
    {pic: image5, text: "Salad"},
    {pic: image6, text: "all"}
];

  return (
   <div>
     <h2> Top Picks for This Week</h2>
    <div class="container my-4">

    <ol class="carousel-indicators">
      <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
      <li data-target="#multi-item-example" data-slide-to="1"></li>
      <li data-target="#multi-item-example" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <div class="row">
          <div class="col-md-4">
            <div class="card mb-2">
              <img class="card-img-top" src={image1} alt=""/>
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a class="btn btn-primary">Button</a>
              </div>
            </div> 
          </div>

          <div class="col-md-4 clearfix d-none d-md-block">
            <div class="card mb-2">
              <img class="card-img-top" src={image2}
                   alt="Card image cap"/>
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 clearfix d-none d-md-block">
            <div class="card mb-2">
              <img class="card-img-top" src={image3}
                   alt=""/>
              <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
                <a class="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  

  <div class="container my-4">

<ol class="carousel-indicators">
  <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
  <li data-target="#multi-item-example" data-slide-to="1"></li>
  <li data-target="#multi-item-example" data-slide-to="2"></li>
</ol>
<div class="carousel-inner" role="listbox">
  <div class="carousel-item active">
    <div class="row">
      <div class="col-md-4">
        <div class="card mb-2">
          <img class="card-img-top" src={image4} alt=""/>
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div> 
      </div>

      <div class="col-md-4 clearfix d-none d-md-block">
        <div class="card mb-2">
          <img class="card-img-top" src={image5}
               alt="Card image cap"/>
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>

      <div class="col-md-4 clearfix d-none d-md-block">
        <div class="card mb-2">
          <img class="card-img-top" src={image6}
               alt=""/>
          <div class="card-body">
            <h4 class="card-title">Card title</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
              card's content.</p>
            <a class="btn btn-primary">Button</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  </div>

  )
}

export default CarouselFunc



