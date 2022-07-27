import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import MovieForm from '../movie_form/MovieForm';

const MovieModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add movie
      </Button>
      <Modal
        title="Movie form"
        visible={isModalVisible}
        footer={null}
        width={800}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Close"
      >
        <MovieForm />
      </Modal>
    </>
  );
};

export default MovieModal;
