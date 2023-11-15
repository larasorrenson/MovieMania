import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}

// hero content
const Hero = () => (
  <section className="hero">
    {/* content for the hero */}
    <div className="hero__content">
      <h1 className="hero__title">Movie Mania</h1>
      <p className="hero__subtitle">Search for all your favourite movies</p>

      <Link to="/Search">Search</Link>
      
    </div>
  </section>
);

// features section
function Features() {
  /* The information for our features in JSON
  so we can reduce the amount of repetitive JSX and reuse one component instead */
  const featuresData = [
    {
      heading: "SEARCH",
      text:
        "Search the database for movies from 1990 to 2023.",
      img: { src: "faces.png", alt: "Entertainment icon" }
    },
    {
      heading: "EXPLORE",
      text:
        "Learn more about your favourite films and view ratings.",
      img: { src: "like.png", alt: "Entertainment icon" }
    },
    {
      heading: "LEARN MORE",
      text:
        "Find detailed information on your favourite cast and crew.",
      img: { src: "heart.png", alt: "Heart icon" }
    }
  ];

  return (
    <article className="features">
      <div className="features__header">
        <h2>All the movie info you need!</h2>
      </div>

      <div className="features__box-wrapper">
        {
          // display the information for each of our features in their own Box
          featuresData.map((feature) => (
            <FeatureBox feature={feature} />
          ))
        }
      </div>
    </article>
  );
}

// Display a Feature box when passed in the information for the feature
const FeatureBox = ({ feature }) => (
  <div className="features__box">
    <img src={feature.img.src} alt={feature.img.alt} />
    <h5>{feature.heading}</h5>
    <p>{feature.text}</p>
  </div>
);