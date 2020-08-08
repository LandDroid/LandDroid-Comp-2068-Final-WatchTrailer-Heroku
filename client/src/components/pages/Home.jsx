import React from "react";
import { Link } from "react-router-dom";

function Home({ user }) {
  return (
    <header className="home-cta">
      <h1 style={{ color: "#c0392b" }} className="mb-5">
        Let's Watch Trailers
      </h1>

      {user ? (
        <Link to="/trailers/new" className="btn btn-primary reddin">
          Add a Trailer
        </Link>
      ) : (
        <Link to="/register" className="btn btn-primary reddin">
          Register to Create a Trailer
        </Link>
      )}
    </header>
  );
}

export default Home;
