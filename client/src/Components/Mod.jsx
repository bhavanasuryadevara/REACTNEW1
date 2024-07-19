import React from 'react';
import kia1 from './Images/ki-a1.avif'
import './Modcss.css'

const KitchenDesigns = () => {
  return (
    <div className="container 41">
      <div className="row">
        <div className="col">
          <h2>Modular Kitchen Designs</h2>
          <p>
            We craft simple modular kitchen designs that are the perfect blend of functionality and style. Our curated,
            modular kitchen designs in India range from simple kitchens with minimal interiors to more elaborately designed
            kitchen interior designs. All our modern kitchen designs can be customised to fit your budget and existing space.
            We also have kitchen interior designs that work for all shapes: Be it a L-shaped kitchen, U-shaped kitchen or open
            kitchen design - crafting a kitchen interior design that works best for your home is our goal! Browse through our
            top kitchen designs to transform your space today.
          </p>
        </div>
        <div className="card-deck44">
          {/* First row starts with specified content */}
          <div className="card">
          <img src={ kia1} alt="Card image cap" />
            <div className="heart-icon" data-heart>&hearts;</div> {/* Heart symbol overlay */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer46">
              <button className="btn1 btn-primary" >Button 1</button>
              <button className="btn3 btn-secondary">Button 2</button>
            </div>
          </div>
          {/* Second card in the first row */}
          <div className="card">
            
            <img src={ kia1} alt="Card image cap" />
            <div className="heart-icon" data-heart>&hearts;</div> {/* Heart symbol overlay */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer46">
              <button className="btn1 btn-primary">Button 1</button>
              <button className="btn3 btn-secondary">Button 2</button>
            </div>
          </div>
          {/* Third card in the first row */}
          <div className="card">
           
            <img src={kia1} alt="Card image cap" />
            <div className="heart-icon" data-heart>&hearts;</div> {/* Heart symbol overlay */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer46">
              <button className="btn1 btn-primary">Button 1</button>
              <button className="btn3 btn-secondary">Button 2</button>
            </div>
          </div>
        </div>
        <br />
        {/* Second row starts with specified content */}
        <div className="card-deck mt-4">
          {/* Special title card */}
          <div className="card special-title-card1">
            <div className="card-body">
              <h5 className="card-title">Kitchens starting from ₹2 Lakh*</h5>
              <p className="card-text">Kitchens for all budgets with EMIs as low as ₹3,300/month</p>
              
              <a href="#" className="btn2 btn-primary1">Go somewhere</a>
            </div>
          </div>
          {/* First card in the second row */}
          <div className="card">
          <img src={kia1} alt="Card image cap" />
            <div className="heart-icon" data-heart>&hearts;</div> {/* Heart symbol overlay */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer46">
              <button className="btn1 btn-primary">Button 1</button>
              <button className="btn3 btn-secondary">Button 2</button>
            </div>
          </div>
          {/* Second card in the second row */}
          <div className="card">
          <img src={kia1} alt="Card image cap" />
            <div className="heart-icon" data-heart>&hearts;</div> {/* Heart symbol overlay */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer46">
              <button className="btn1 btn-primary">Button 1</button>
              <button className="btn3 btn-secondary">Button 2</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KitchenDesigns;
