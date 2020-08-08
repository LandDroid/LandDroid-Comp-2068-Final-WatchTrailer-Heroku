import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";

const New = function () {
  const genres = [
    `Action`,
    `Comedy`,
    `Horror`,
    `Romance`,
    `Thiller`,
    `Drama`,
    `Mystery`,
    `Crime`,
    `Animation`,
    `Adventure`,
    `Fantasy`,
    `Family`,
    `Sci-Fi`,
    `Western`,
  ];

  const ratings = [`G`, `PG`, `PG-13`, `R`, `NC-17`, `A`];

  const videoTypes = [`Movie`, `TV Show`];

  const [inputs, setInputs] = useState({
    trailerTitle: "",
    description: "",
    genre: `Action`,
    rating: `PG`,
    year: "",
    episodes: "",
    language: "",
    videoType: `Movie`,
  });

  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const resp = await Axios.post("/api/trailers", inputs);

      if (resp.status === 200) {
        toast("The trailer was created successfully", {
          type: toast.TYPE.SUCCESS,
        });
        setRedirect(true);
      } else {
        toast("There was an issue creating the trailer", {
          type: toast.TYPE.ERROR,
        });
      }
    } catch (error) {
      toast("There was an issue creating the trailer", {
        type: toast.TYPE.ERROR,
      });
    }
  };

  const handleInputChange = async (event) => {
    event.persist();

    const { name, value } = event.target;

    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  };

  if (redirect) return <Redirect to="/trailers" />;

  return (
    <Container className="my-5">
      <header>
        <h1>Add new Trailer</h1>
      </header>

      <hr />

      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Trailer Title:</Form.Label>
            <Form.Control
              name="trailerTitle"
              onChange={handleInputChange}
              value={inputs.trailerTitle}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              onChange={handleInputChange}
              value={inputs.description}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Genre:</Form.Label>
            <Form.Control
              as="select"
              name="genre"
              onChange={handleInputChange}
              defaultValue={inputs.genre}
            >
              {genres.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Rating:</Form.Label>
            <Form.Control
              as="select"
              name="rating"
              onChange={handleInputChange}
              defaultValue={inputs.rating}
            >
              {ratings.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Video Type:</Form.Label>
            <Form.Control
              as="select"
              name="videoTypes"
              onChange={handleInputChange}
              defaultValue={inputs.videoType}
            >
              {videoTypes.map((type, i) => (
                <option key={i} value={type}>
                  {type}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Release Date:</Form.Label>
            <Form.Control
              type="number"
              name="year"
              onChange={handleInputChange}
              value={inputs.year}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Language:</Form.Label>
            <Form.Control
              name="language"
              onChange={handleInputChange}
              value={inputs.language}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Episodes:</Form.Label>
            <Form.Control
              type="number"
              name="episodes"
              step="1"
              min="1"
              max="30"
              onChange={handleInputChange}
              value={inputs.episodes}
            />
          </Form.Group>

          <Form.Group>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </Form.Group>
        </Form>
      </div>
    </Container>
  );
};

export default New;
