import React from 'react'
import './portfolio.css'
import Img from '../../assets/Screenshot from 2023-02-11 20-32-00.png'
function Portfolio() {
  const data = [
    {
      id: 1,
      image: Img,
      title: "My Personal Website",
      github: "https://github.com/Ahmedhussin1?tab=repositories",
      demo: "https://ahmedhussin1.github.io/#projects",
    },
    {
      id: 2,
      image: Img,
      title: "My Playlist Sharing Website",
      github: "https://github.com/Ahmedhussin1?tab=repositories",
      demo: "https://ahmedhussin1.github.io/#projects",
    },
    {
      id: 3,
      image: Img,
      title: "Tick Tack Toe Website",
      github: "https://github.com/Ahmedhussin1?tab=repositories",
      demo: "https://ahmedhussin1.github.io/#projects",
    },
    {
      id: 4,
      image: Img,
      title: "My Personal Website",
      github: "https://github.com/Ahmedhussin1?tab=repositories",
      demo: "https://ahmedhussin1.github.io/#projects",
    },
    {
      id: 5,
      image: Img,
      title: "My Personal Website",
      github: "https://github.com/Ahmedhussin1?tab=repositories",
      demo: "https://ahmedhussin1.github.io/#projects",
    },
    {
      id: 6,
      image: Img,
      title: "My Personal Website",
      github: "https://github.com/Ahmedhussin1?tab=repositories",
      demo: "https://ahmedhussin1.github.io/#projects",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo})=>{
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-cta">
                <a
                  href={github}
                  className="btn"
                >
                  Github
                </a>

                <a
                  href={demo}
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })
       }
      </div>
    </section>
  );
}

export default Portfolio