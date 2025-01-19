import React from 'react';
import industryimg from '../../icon/ai-generated-ai-generative-heavy-industry-pollutes-factory-ecology-catastrophe-dirty-air-smog-graphic-art-photo.jpg';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="image-container">
      <div className="background">
        <img className="industry-img" src={industryimg} alt="Industry" />
        <div className="gradient-overlay"></div>
      </div>
      <div className="about-text">
        <h2>Hakkımızda</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, quos. Animi illum ea quae delectus repellendus rerum dolor velit perspiciatis aspernatur adipisci aperiam accusamus, laborum neque eaque omnis porro fugit.
          Vitae nulla libero atque ex iusto neque voluptates at voluptatem quis? Animi officia nemo inventore dignissimos aliquam magni ipsum dolore. Fugit eos sit voluptatum voluptates eum tenetur ipsa sed totam!
        </p>
        <div className="buttons">
          <button className="btn find-out-more">İletişime Geç</button>
          <button className="btn robots">Ürünler</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
