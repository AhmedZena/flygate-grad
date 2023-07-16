import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
const ConfirmationModal = ({ bookingId, onConfirm, onClose }) => {
  const handleOverlayClick = (event) => {
    // If the click is outside the modal content, close the modal
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-75"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-lg p-4 w-1/3 text-center">
        <h2 className="text-xl font-bold mb-4">Confirmation</h2>
        <p>Are you sure you want to remove this ticket?</p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            <FaTimes className="inline-block mr-1" />
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            onClick={() => onConfirm(bookingId)}
          >
            <FaTrashAlt className="inline-block mr-1" />
            Remove Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
