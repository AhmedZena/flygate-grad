import React, { useState } from "react";
import ConfirmationModal from "./ConfirmationModal/ConfirmationModal";
import { FaTrashAlt } from "react-icons/fa";

const BookingManagement = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      flightNumber: "FL123",
      email: "ahmed@gmail.com",
      seatNumber: "A1",
    },
    {
      id: 2,
      flightNumber: "FL456",
      email: "john@gmail.com",
      seatNumber: "B2",
    },
    {
      id: 3,
      flightNumber: "FL789",
      email: "mira@gmail.com",
      seatNumber: "C3",
    },
  ]);
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Function to remove a booking
  const removeBooking = (bookingId) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== bookingId
    );
    setBookings(updatedBookings);
    setSelectedBooking(null); // Reset selected booking after removing
  };

  // Function to handle confirmation modal
  const handleConfirmModal = (bookingId) => {
    setSelectedBooking(bookingId);
  };

  // Function to close confirmation modal
  const closeConfirmModal = () => {
    setSelectedBooking(null);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-4/5">
        <h2 className="text-3xl font-bold mb-20 text-center">
          Booking Management
        </h2>
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <table className="w-full bg-white rounded-lg shadow-lg ">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-4 px-6 text-left">Flight Number</th>
                <th className="py-4 px-6 text-left">Passenger Email</th>
                <th className="py-4 px-6 text-left">Seat Number</th>
                <th className="py-4 px-6 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-200">
                  <td className="py-4 px-6">{booking.flightNumber}</td>
                  <td className="py-4 px-6">{booking.email}</td>
                  <td className="py-4 px-6">{booking.seatNumber}</td>
                  <td className="py-4 px-6">
                    <button
                      className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center"
                      onClick={() => handleConfirmModal(booking.id)}
                    >
                      <FaTrashAlt className="mr-2" />
                      Remove Ticket
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {selectedBooking && (
        <ConfirmationModal
          bookingId={selectedBooking}
          onConfirm={removeBooking}
          onClose={closeConfirmModal}
        />
      )}
    </div>
  );
};

export default BookingManagement;
