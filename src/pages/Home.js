import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import photo from "../images/photo.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${photo})` }}>
        <div className="headerContainer">
        <h1 style={{ color: 'white' }}>Beauty Parlour Website</h1>
        <p style={{ color: 'white' }}>Enhancing Your Beauty, One Style at a Time</p>  
          <Link to="/menu">
            <button>BOOK NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
