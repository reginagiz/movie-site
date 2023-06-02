import React, { useEffect, useState } from "react";
import { Input, Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { updateMovie } from "../../../store/movie_update";
import { useDispatch } from "react-redux";
import getImageUrl from "../../../utils/getImageUrl";
import st from "./EditMovie.module.css";
import Axios from "axios";

const EditMovie = ({ movie, onSave }) => {
  const dispatch = useDispatch();
  const [newMovie, setNewMovie] = useState(movie);
  const [poster, setPoster] = useState();
  const [stills, setStills] = useState([]);

  useEffect(() => {
    setNewMovie(movie);
  }, [movie]);

  const handleChange = (key) => (val) => {
    setNewMovie((prev) => ({ ...prev, [key]: val.target.value }));
  };

  const handleSave = () => {
    dispatch(
      updateMovie({
        ...newMovie,
        Poster: poster,
        Images: stills,
      })
    );
    onSave();
  };

  const { TextArea } = Input;

  const images = movie.Images?.map((image) => {
    return {
      uid: "-xxx",
      percent: 100,
      name: image,
      status: "done",
      url: getImageUrl(image),
    };
  });

  const uploadPoster = (options) => {
    const formData = new FormData();
    formData.append("file", options.file);
    formData.append("upload_preset", "hstbuhbk");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dbx6asvhz/image/upload",
      formData
    ).then((response) => {
      options.onSuccess(response);
      setPoster(response.data.secure_url);
    });
  };

  const uploadStills = (options) => {
    const formData = new FormData();
    formData.append("file", options.file);
    formData.append("upload_preset", "hstbuhbk");

    Axios.post(
      "https://api.cloudinary.com/v1_1/dbx6asvhz/image/upload",
      formData
    ).then((response) => {
      options.onSuccess(response);
      setStills((prev) => [...prev, response.data.secure_url]);
    });
  };

  return (
    <div className={st.edit_form}>
      <div className={st.edit_form_container}>
        <div className={st.general}>
          <div>
            <b>Title:</b>
            <Input value={newMovie.Title} onChange={handleChange("Title")} />
          </div>
          <div>
            <b>Year:</b>
            <Input value={newMovie.Year} onChange={handleChange("Year")} />
          </div>
          <div>
            <b>Rated:</b>
            <Input value={newMovie.Rated} onChange={handleChange("Rated")} />
          </div>
          <div>
            <b>Poster:</b>
            <Upload
              type="file"
              customRequest={uploadPoster}
              listType="picture-card"
              accept="image/*"
              maxCount={1}
              className={st.upload}
              defaultFileList={[
                {
                  uid: "-xxx",
                  percent: 100,
                  name: movie.Poster,
                  status: "done",
                  url: getImageUrl(movie.Poster),
                },
              ]}
            >
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Poster
                </div>
              </div>
            </Upload>
          </div>
        </div>
        <div className={st.about}>
          <div>
            <b>Type:</b>
            <Input value={newMovie.Type} onChange={handleChange("Type")} />
          </div>
          <div>
            <b>Released:</b>
            <Input
              value={newMovie.Released}
              onChange={handleChange("Released")}
            />
          </div>
          <div>
            <b>imdbRating:</b>
            <Input
              value={newMovie.imdbRating}
              onChange={handleChange("imdbRating")}
            />
          </div>
          <div>
            <b>Awards:</b>
            <Input value={newMovie.Awards} onChange={handleChange("Awards")} />
          </div>
          <div>
            <b>Country:</b>
            <Input
              value={newMovie.Country}
              onChange={handleChange("Country")}
            />
          </div>
          <div>
            <b>Genre:</b>
            <Input value={newMovie.Genre} onChange={handleChange("Genre")} />
          </div>
          <div>
            <b>Director:</b>
            <Input
              value={newMovie.Director}
              onChange={handleChange("Director")}
            />
          </div>
          <div>
            <b>Writer:</b>
            <Input value={newMovie.Writer} onChange={handleChange("Writer")} />
          </div>
          <div>
            <b>Actors:</b>
            <Input value={newMovie.Actors} onChange={handleChange("Actors")} />
          </div>
          <div>
            <b>Runtime:</b>
            <Input
              value={newMovie.Runtime}
              onChange={handleChange("Runtime")}
            />
          </div>
          <div>
            <b>Plot:</b>
            <TextArea
              rows={4}
              value={newMovie.Plot}
              onChange={handleChange("Plot")}
            />
          </div>
          <div>
            <b>Stills:</b>
            <Upload
              type="file"
              customRequest={uploadStills}
              listType="picture-card"
              accept="image/*"
              maxCount={6}
              defaultFileList={images}
              multiple="true"
              className={st.upload}
            >
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Stills
                </div>
              </div>
            </Upload>
          </div>
          <div className={st.buttons_container}>
            <Button
              className={st.save_button}
              onClick={handleSave}
              type="primary"
            >
              Save
            </Button>
            <Button onClick={onSave}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMovie;
