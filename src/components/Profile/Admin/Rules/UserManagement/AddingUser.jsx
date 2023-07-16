// Import necessary libraries
import React, { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";

const AddingUser = (
  users,
  setUsers,
  newUser,
  setNewUser,
  showAddUserForm,
  setShowAddUserForm,
  formErrors,
  setFormErrors,
  toggleAddUserForm
) => {
  const handleAddUser = (e) => {
    e.preventDefault();

    const errors = {};
    let hasErrors = false;

    if (newUser.first_name.trim() === "") {
      errors.firstName = "First name is required";
      hasErrors = true;
    }
    if (newUser.last_name.trim() === "") {
      errors.lastName = "Last name is required";
      hasErrors = true;
    }
    if (newUser.phone_num.trim() === "") {
      errors.phoneNum = "Phone number is required";
      hasErrors = true;
    }
    if (newUser.email.trim() === "") {
      errors.email = "Email is required";
      hasErrors = true;
    }
    if (newUser.password.trim() === "") {
      errors.password = "Password is required";
      hasErrors = true;
    }

    if (hasErrors) {
      setFormErrors(errors);
      return;
    }

    setUsers([...users, newUser]);

    setNewUser({
      first_name: "",
      last_name: "",
      phone_num: "",
      email: "",
      password: "",
    });

    setShowAddUserForm(false);
  };
  return (
    <form onSubmit={handleAddUser} className="m-auto w-3/4 mt-10">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            First Name:
          </label>
          <input
            type="text"
            value={newUser.first_name}
            onChange={(e) =>
              setNewUser({ ...newUser, first_name: e.target.value })
            }
            className={`border ${
              formErrors.firstName ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.firstName && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.firstName}</p>
            </div>
          )}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Last Name:
          </label>
          <input
            type="text"
            value={newUser.last_name}
            onChange={(e) =>
              setNewUser({ ...newUser, last_name: e.target.value })
            }
            className={`border ${
              formErrors.lastName ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.lastName && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.lastName}</p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Country:
          </label>
          {/* Replace "input" with the appropriate component for country selection */}
          <input
            type="text"
            value={newUser.country}
            onChange={(e) =>
              setNewUser({ ...newUser, country: e.target.value })
            }
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full"
          />
          {/* Add error handling for country if necessary */}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Phone Number:
          </label>
          <input
            type="text"
            value={newUser.phone_num}
            onChange={(e) =>
              setNewUser({ ...newUser, phone_num: e.target.value })
            }
            className={`border ${
              formErrors.phoneNum ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.phoneNum && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.phoneNum}</p>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            className={`border ${
              formErrors.email ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.email && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.email}</p>
            </div>
          )}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Temp Password:
          </label>
          <input
            type="password"
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
            className={`border ${
              formErrors.password ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.password && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.password}</p>
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        >
          Add User
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded ml-2"
          onClick={toggleAddUserForm}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddingUser;
