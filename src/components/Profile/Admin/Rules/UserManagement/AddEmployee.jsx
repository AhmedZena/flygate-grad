import React, { useState, useEffect } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const AddEmployeeForm = ({ onCancel }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [newUser, setNewUser] = useState({
    Fname: "",
    Mname: "",
    Lname: "",
    email: "",
    gender: "",
    phone: "",
    address: "",
    sup_ssn: "",
    birth: "",
    password: "",
    airport_name: "",
    job_title: "",
    salary: "",
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
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
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

    // Validate required fields
    if (!newUser.Fname) {
      errors.Fname = "First name is required";
    }
    if (!newUser.Lname) {
      errors.Lname = "Last name is required";
    }
    if (!newUser.email) {
      errors.email = "Email is required";
    }
    if (!newUser.gender) {
      errors.gender = "Gender is required";
    }
    if (!newUser.phone) {
      errors.phone = "Phone number is required";
    }
    if (!newUser.address) {
      errors.address = "Address is required";
    }
    if (!newUser.sup_ssn) {
      errors.sup_ssn = "Supervisor SSN is required";
    }
    if (!newUser.birth) {
      errors.birth = "Birth date is required";
    }
    if (!newUser.password) {
      errors.password = "Password is required";
    }
    if (!newUser.airport_name) {
      errors.airport_name = "Airport name is required";
    }
    if (!newUser.job_title) {
      errors.job_title = "Job title is required";
    }
    if (!newUser.salary) {
      errors.salary = "Salary is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      var requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(newUser),
        redirect: "follow",
      };

      //   console.log(newUser);
      //   // Data is valid, proceed with submitting to the API
      //   axios
      //     .post("http://40.115.44.233:3000/api/employee", newUser)
      //     .then((response) => {
      //       console.log("User added:", response.data);
      fetch("http://40.115.44.233:3000/api/employee", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));

      // Reset the form
      //   setNewUser({
      //     Fname: "",
      //     Mname: "",
      //     Lname: "",
      //     email: "",
      //     gender: "",
      //     phone: "",
      //     address: "",
      //     sup_ssn: "",
      //     birth: "",
      //     password: "",
      //     airport_name: "",
      //     job_title: "",
      //     salary: "",
      //   });
      // })
      // .catch((error) => {
      //   console.error("Error:", error);
      //   toast.error("Error: " + error.message);
      // });
    }
  };

  return (
    <form onSubmit={handleAddUser} className="w-3/4 mx-auto">
      <div className="flex flex-wrap p-4 mx-2 my-4 bg-white rounded-lg shadow-md">
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            First Name:
          </label>
          <input
            type="text"
            value={newUser.Fname}
            onChange={onInputChange}
            name="Fname"
            className={`border ${
              formErrors.Fname ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.Fname && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.Fname}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Middle Name:
          </label>
          <input
            type="text"
            value={newUser.Mname}
            onChange={onInputChange}
            name="Mname"
            className={`border ${
              formErrors.Mname ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.Mname && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.Mname}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Last Name:
          </label>
          <input
            type="text"
            value={newUser.Lname}
            onChange={onInputChange}
            name="Lname"
            className={`border ${
              formErrors.Lname ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.Lname && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.Lname}</p>
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
            Gender:
          </label>
          <input
            type="text"
            value={newUser.gender}
            onChange={onInputChange}
            name="gender"
            className={`border ${
              formErrors.gender ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.gender && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.gender}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Phone:
          </label>
          <input
            type="text"
            value={newUser.phone}
            onChange={onInputChange}
            name="phone"
            className={`border ${
              formErrors.phone ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.phone && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.phone}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Address:
          </label>
          <input
            type="text"
            value={newUser.address}
            onChange={onInputChange}
            name="address"
            className={`border ${
              formErrors.address ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.address && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.address}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Supervisor SSN:
          </label>
          <input
            type="text"
            value={newUser.sup_ssn}
            onChange={onInputChange}
            name="sup_ssn"
            className={`border ${
              formErrors.sup_ssn ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.sup_ssn && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.sup_ssn}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Birth Date:
          </label>
          <input
            type="text"
            value={newUser.birth}
            onChange={onInputChange}
            name="birth"
            className={`border ${
              formErrors.birth ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.birth && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.birth}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Password:
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
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Airport Name:
          </label>
          <input
            type="text"
            value={newUser.airport_name}
            onChange={onInputChange}
            name="airport_name"
            className={`border ${
              formErrors.airport_name ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.airport_name && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.airport_name}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Job Title:
          </label>
          <input
            type="text"
            value={newUser.job_title}
            onChange={onInputChange}
            name="job_title"
            className={`border ${
              formErrors.job_title ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.job_title && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.job_title}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Salary:
          </label>
          <input
            type="text"
            value={newUser.salary}
            onChange={onInputChange}
            name="salary"
            className={`border ${
              formErrors.salary ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.salary && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.salary}</p>
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

export default AddEmployeeForm;
