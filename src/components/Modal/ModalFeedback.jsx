import React, { useState } from "react";
import { Button, Modal } from "antd";
import style from "./Modal.module.scss";
import ModalRegister from "./ModalRegister.jsx";
import ModalAuto from "./ModalAuto.jsx";

const modalFeedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      onCancel={handleCancel}
      visible={isModalOpen}
      className={style.modal}
      footer={false}
    ></Modal>
  );
};

export default modalFeedback;
