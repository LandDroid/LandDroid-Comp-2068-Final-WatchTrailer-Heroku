import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Index = function ({ user }) {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    (async () => {
      await getTrailers();
    })();
  }, []);

  const getTrailers = async () => {
    const trailersResp = await Axios.get("/api/trailers");
    if (trailersResp.status === 200) setTrailers(trailersResp.data);
  };

  const deleteTrailer = async (trailer) => {
    try {
      const resp = await Axios.post("/api/trailers/delete", {
        id: trailer._id,
      });

      if (resp.status === 200)
        toast("The trailer was deleted successfully", {
          type: toast.TYPE.SUCCESS,
        });

      await getTrailers();
    } catch (error) {
      toast("There was an error deleting the trailer", {
        type: toast.TYPE.ERROR,
      });
    }
  };

  return (
    <Container className="my-5">
      <header>
        <h1>Trailer Database</h1>
      </header>

      <hr />

      <div className="content">
        {trailers &&
          trailers.map((trailer, i) => (
            <div key={i} className="card my-3">
              <div className="card-header clearfix">
                <div className="float-left">
                  <h5 className="card-title">{trailer.trailerTitle}</h5>

                  {trailer.user ? <small>{trailer.user.fullname}</small> : null}
                </div>

                <div className="float-right">
                  <small>{trailer.updatedAt}</small>
                </div>
              </div>

              <div className="card-body">
                <p className="card-text">Genre: {trailer.genre}</p>
                <p className="card-text">Rating: {trailer.rating}</p>
                <p className="card-text">Description: {trailer.description}</p>
                <p className="card-text">Language: {trailer.language}</p>
                <p className="card-text">Release Year: {trailer.year}</p>
                <p className="card-text">Video Type: {trailer.videoType}</p>
                <p className="card-text">Episodes: {trailer.episodes}</p>
              </div>

              {user ? (
                <div className="card-footer">
                  <Link
                    to={{
                      pathname: "/trailers/edit",
                      state: {
                        id: trailer._id,
                      },
                    }}
                  >
                    <i className="fa fa-edit"></i>
                  </Link>

                  <Link
                    to={{
                      pathname: "/trailers/",
                      state: {
                        id: trailer._id,
                      },
                    }}
                    onClick={() => deleteTrailer(trailer)}
                  >
                    <i className="fa fa-trash"></i>
                  </Link>
                </div>
              ) : null}
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Index;
