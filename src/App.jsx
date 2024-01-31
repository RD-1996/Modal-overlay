import React, { useState } from 'react';
import "./App.css";

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          ❌
        </button>
        <div>Lorem ipsum dolor sitratione corporis explicabo, illum iure eos? Temporibus voluptatibus rem labore!</div>
      </div>
    </div>
  );
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      closeModal();
    }
  };

  return (
    <div className='modal-button' >
      <button onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <div className="overlay" onClick={handleOverlayClick}>
          <Modal onClose={closeModal} />
        </div>
      )}

      {/* Rest of your application content */}
    </div>
  );
};

export default App;
