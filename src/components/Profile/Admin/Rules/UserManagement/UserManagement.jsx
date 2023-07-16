import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import AddUserForm from "./AddUserForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserManagement = () => {
  const [users, setUsers] = useState([{}]);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://40.115.44.233:3000/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);

        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    country: "",
    phone_num: "",
    email: "",
    password: "",
  });

  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleRemoveUser = (userIndex) => {
    const updatedUsers = [...users];
    updatedUsers.splice(userIndex, 1);
    setUsers(updatedUsers);
  };

  const handleEditUser = (userIndex) => {
    // Implement the logic for editing a user here
    // You can use the userIndex to access the user in the `users` array
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    // Rest of the function code...
  };

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const toggleAddUserForm = () => {
    setShowAddUserForm(!showAddUserForm);
    setFormErrors({});
  };

  const toggleShowUsers = () => {
    setShowUsers(!showUsers);
  };

  return (
    <div className="p-4  mx-10 ">
      <h2 className="flex justify-center  text-3xl font-semibold m-10">
        User Management
      </h2>
      <div className=" flex justify-between items-center my-18 bg-blue-400 p-4 rounded-lg ">
        <h2 className="text-xl font-semibold  ">All Users</h2>

        {!showUsers && (
          <button
            className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-2xl
             ${toggleShowUsers ? "text-center" : ""}`}
            onClick={toggleShowUsers}
          >
            Show All Users
          </button>
        )}
        {showUsers && (
          <button
            className={`bg-gray-300 hover:bg-gray-400 text-gray-500 py-2 px-4 rounded-2xl
           flex justify-center text-center        `}
            onClick={toggleShowUsers}
          >
            Hide All Users
          </button>
        )}
      </div>
      {showUsers && (
        <>
          <UserList
            users={users}
            onRemoveUser={handleRemoveUser}
            onEditUser={handleEditUser}
          />
        </>
      )}

      <hr className="my-10 mx-4" />
      <div className="addingUser flex justify-between items-center  my-18 bg-sky-500 p-4 rounded-lg ">
        <h2 className="text-xl font-semibold ">Add New User</h2>
        {!showAddUserForm && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-2xl"
            onClick={toggleAddUserForm}
          >
            Add New User
          </button>
        )}
      </div>
      {showAddUserForm && (
        <AddUserForm
          newUser={newUser}
          formErrors={formErrors}
          onInputChange={handleInputChange}
          onAddUser={handleAddUser}
          onCancel={toggleAddUserForm}
        />
      )}
    </div>
  );
};

export default UserManagement;
