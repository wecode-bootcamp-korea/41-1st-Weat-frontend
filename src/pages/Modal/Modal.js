import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalPop = () => {
  const [onModal, setOnModal] = useState(false);
  return <Modal isOpen={onModal}>This is Modal content</Modal>;
};

export default ModalPop;
