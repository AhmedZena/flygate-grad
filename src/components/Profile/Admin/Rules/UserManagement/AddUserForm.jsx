import React, { useState, useEffect } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import axios from "axios";

const AddUserForm = ({ onCancel }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    country: "",
    phoneCode: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  useEffect(() => {
    // Fetch countries data from API
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountries(response.data);
      setIsLoading(false);
    });
  }, []);
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleCountryChange = (e) => {
    const { value } = e.target;
    const selectedCountry = countries.find(
      (country) => country.alpha2Code === value
    );
    setNewUser({
      ...newUser,
      country: value,
      phoneCode: selectedCountry?.callingCodes[0] || "",
    });
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const errors = {};
    if (!newUser.firstName) {
      errors.firstName = "First name is required";
    }
    if (!newUser.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!newUser.country) {
      errors.country = "Country is required";
    }
    if (!newUser.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    }
    if (!newUser.email) {
      errors.email = "Email is required";
    }
    if (!newUser.password) {
      errors.password = "Password is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      //   // Add the user
      console.log("User added:", newUser);
      //   // Reset the form
      //   setNewUser({
      //     firstName: "",
      //     lastName: "",
      //     country: "",
      //     phoneCode: "",
      //     phoneNumber: "",
      //     email: "",
      //     password: "",
      //   });
    }
  };

  return (
    <form onSubmit={handleAddUser} className="w-3/4 mx-auto">
      <div className="flex flex-wrap  p-4 mx-2 my-4 bg-white rounded-lg shadow-md">
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            First Name:
          </label>
          <input
            type="text"
            value={newUser.firstName}
            onChange={onInputChange}
            name="firstName"
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
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Last Name:
          </label>
          <input
            type="text"
            value={newUser.lastName}
            onChange={onInputChange}
            name="lastName"
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
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Country:
          </label>
          <select
            value={newUser.country}
            onChange={handleCountryChange}
            name="country"
            className={`border ${
              formErrors.country ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.alpha2Code} value={country.alpha2Code}>
                {country.name}
              </option>
            ))}
          </select>
          {formErrors.country && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.country}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Phone Number:
          </label>
          <div className="flex">
            <input
              type="text"
              value={`${newUser.phoneCode ? "+" + newUser.phoneCode : ""}
             `}
              readOnly
              className="border border-gray-300 rounded-l pl-4  w-1/4 bg-gray-50 focus:outline-none text-base"
            />
            <input
              type="number"
              max={9999999999}
              value={newUser.phoneNumber}
              onChange={onInputChange}
              name="phoneNumber"
              className={`border ${
                formErrors.phoneNumber ? "border-red-500" : "border-gray-300"
              } rounded-r px-4 py-2 focus:outline-none focus:border-blue-500 flex-1`}
            />
          </div>
          {formErrors.phoneNumber && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.phoneNumber}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            value={newUser.email}
            onChange={onInputChange}
            name="email"
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
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Temporary Password:
          </label>
          <input
            type="password"
            value={newUser.password}
            onChange={onInputChange}
            name="password"
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
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-blue-600"
        >
          Add User
        </button>
        <button
          type="button"
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
