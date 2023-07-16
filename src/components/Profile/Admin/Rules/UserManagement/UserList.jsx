import React from "react";
import { FaUserEdit, FaTrash } from "react-icons/fa";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaGlobe,
  FaDollarSign,
} from "react-icons/fa";

const UserList = ({ users, onRemoveUser, onEditUser, employee = false }) => {
  return (
    <div>
      {users.map((user, index) => (
        <div
          key={index}
          className="bg-white rounded shadow p-4 flex items-center mb-4"
        >
          <div className=" rounded p-4 mb-4 flex items-center w-full md:items-start md:w-3/4">
            <div className="mr-4">
              <FaUser className="text-gray-500 text-2xl" />
            </div>
            <div className="flex justify-between items-center w-full ">
              <p className="text-lg font-semibold">{user.fullName}</p>
              <div className="flex items-center text-gray-500">
                <FaPhone className="mr-1" />

                {employee ? (
                  <p>{user.phone}</p>
                ) : (
                  <p>{user.ClientPhones[0].phone}</p>
                )}
              </div>
              <div className="flex items-center text-gray-500">
                <FaGlobe className="mr-1" />
                <p>{user.country}</p>
              </div>
              <div className="flex items-center text-gray-500">
                <FaEnvelope className="mr-1" />
                <p>{user.email}</p>
              </div>

              <div className="flex items-center text-gray-500">
                <FaUser className="mr-1" />
                <p>{user.job_title}</p>
              </div>

              {employee && (
                <div className="flex items-center text-gray-500">
                  <FaDollarSign className="mr-1" />
                  <p>{user.salary}</p>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center md:justify-center lg:justify-end w-full md:w-1/4">
            <button
              className="text-blue-500 mr-2 mt-0 "
              onClick={() => onEditUser(index)}
            >
              <FaUserEdit />
            </button>
            <button
              className="text-red-500"
              onClick={() => onRemoveUser(index)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
