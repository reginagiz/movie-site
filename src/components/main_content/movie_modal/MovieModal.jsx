import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import MovieForm from '../movie_form/MovieForm';

const MovieModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add movie
      </Button>
      <Modal title="Movie form" visible={isModalVisible} footer={null} width ={800} closable={true} >
        <MovieForm />
      </Modal>
    </>
  );
};

export default MovieModal;
