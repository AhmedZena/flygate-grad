import React, { useState } from "react";
import {
  FaUserEdit,
  FaTrash,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
} from "react-icons/fa";

import AddingUser from "./AddingUser";

const UserManagement = () => {
  const [users, setUsers] = useState([
    {
      first_name: "Ahmed",
      last_name: "Mohamed",
      country: "Egypt",
      phone_num: "+20 10 1234 5678",
      email: "ahmedm@example.com",
      password: "egypt123",
    },
    // Add more users as needed
  ]);

  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    phone_num: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const [showAddUserForm, setShowAddUserForm] = useState(false);

  const handleRemoveUser = (userIndex) => {
    const updatedUsers = [...users];
    updatedUsers.splice(userIndex, 1);
    setUsers(updatedUsers);
  };

  const handleEditUser = (userIndex) => {
    // Implement the logic for editing a user here
    // You can use the userIndex to access the user in the `users` array
  };
  const toggleAddUserForm = () => {
    setShowAddUserForm(!showAddUserForm);
    setFormErrors({});
  };
  return (
    <div className="p-4">
      <h2
        className="text-xl font-semibold mb-4 text-center
      "
      >
        Show All Users
      </h2>
      {users.map((user, index) => (
        <div
          key={index}
          className="bg-white rounded shadow p-4 flex items-center justify-between mb-4"
        >
          <div>
            <p>
              {user.first_name} {user.last_name}
            </p>
            <p>{user.phone_num}</p>
            <p>{user.email}</p>
          </div>
          <div className="flex items-center">
            <button
              className="text-blue-500 mr-2"
              onClick={() => handleEditUser(index)}
            >
              <FaUserEdit />
            </button>
            <button
              className="text-red-500"
              onClick={() => handleRemoveUser(index)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}

      <div className="addingUser text-center mt-10">
        <h2 className="text-xl ">Adding New User</h2>
        {!showAddUserForm && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded m-0  my-4 hover:w-1/2
        "
            onClick={toggleAddUserForm}
          >
            Add New User
          </button>
        )}

        {showAddUserForm && (
          <AddingUser
            users={users}
            newUser={newUser}
            setNewUser={setNewUser}
            toggleAddUserForm={toggleAddUserForm}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />
        )}
      </div>
    </div>
  );
};

export default UserManagement;
