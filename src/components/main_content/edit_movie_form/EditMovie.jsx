import React, { useEffect, useState } from 'react';
import { Input, Upload, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { updateMovie } from '../../../store/movie_update';
import { useDispatch } from 'react-redux';
import getImageUrl from '../../../utils/getImageUrl';
import st from './EditMovie.module.css';

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
  const handlePosterChange = (event) => {
    if (event.file.status === 'done') {
      setPoster(event.fileList[0].response);
    }
  };

  const handleStillsChange = (event) => {
    if (event.file.status === 'done') {
      setStills(event.fileList.map((file) => file.response));
    }
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
      uid: '-xxx',
      percent: 100,
      name: image,
      status: 'done',
      url: getImageUrl(image),
    };
  });

  return (
    <div className={st.edit_form}>
      <div className={st.general}>
        <div>
          Title:
          <Input value={newMovie.Title} onChange={handleChange('Title')} />
        </div>
        <div>
          Year:
          <Input value={newMovie.Year} onChange={handleChange('Year')} />
        </div>
        <div>
          Rated:
          <Input value={newMovie.Rated} onChange={handleChange('Rated')} />
        </div>
        <div>
          Poster:
          <Upload
            action="/api/upload"
            listType="picture-card"
            onChange={handlePosterChange}
            accept="image/*"
            maxCount={1}
            defaultFileList={[
              {
                uid: '-xxx',
                percent: 100,
                name: movie.Poster,
                status: 'done',
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
        <h2>
          About the{' '}
          <Input value={newMovie.Type} onChange={handleChange('Type')} />
        </h2>
        <div>
          Released:
          <Input
            value={newMovie.Released}
            onChange={handleChange('Released')}
          />
        </div>
        <div>
          imdbRating:
          <Input
            value={newMovie.imdbRating}
            onChange={handleChange('imdbRating')}
          />
        </div>
        <div>
          Awards:
          <Input value={newMovie.Awards} onChange={handleChange('Awards')} />
        </div>
        <div>
          Country:
          <Input value={newMovie.Country} onChange={handleChange('Country')} />
        </div>
        <div>
          Genre:
          <Input value={newMovie.Genre} onChange={handleChange('Genre')} />
        </div>
        <div>
          Director:
          <Input
            value={newMovie.Director}
            onChange={handleChange('Director')}
          />
        </div>
        <div>
          Writer:
          <Input value={newMovie.Writer} onChange={handleChange('Writer')} />
        </div>
        <div>
          Actors:
          <Input value={newMovie.Actors} onChange={handleChange('Actors')} />
        </div>
        <div>
          Runtime:
          <Input value={newMovie.Runtime} onChange={handleChange('Runtime')} />
        </div>
        <div>
          Plot:
          <TextArea
            rows={4}
            value={newMovie.Plot}
            onChange={handleChange('Plot')}
          />
        </div>
        <div>
          Stills:
          <Upload
            action="/api/upload"
            listType="picture-card"
            accept="image/*"
            maxCount={6}
            onChange={handleStillsChange}
            defaultFileList={images}
            multiple="true"
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
        <div className={st.buttons}>
          <Button className={st.save} onClick={handleSave} type="primary">
            Save
          </Button>

          <Button className={st.save} onClick={onSave}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditMovie;
