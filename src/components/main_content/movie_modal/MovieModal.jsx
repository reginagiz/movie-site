import { Button, Modal } from "antd";
import React, { useState } from "react";
import MovieForm from "../add_movie_form/MovieForm";
import { PlusOutlined } from "@ant-design/icons";

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
      <Button
        type="default"
        shape="circle"
        onClick={showModal}
        icon={<PlusOutlined />}
      ></Button>
      <Modal
        title="Movie form"
        visible={isModalVisible}
        footer={null}
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
