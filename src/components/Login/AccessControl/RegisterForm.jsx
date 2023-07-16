import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    country: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [registrationError, setRegistrationError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setRegistrationError("");

    // Validate the form
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      // Make API call to the backend
      const response = await axios.post(
        "http://40.115.44.233:3000/api/user",
        formData
      );
      console.log("Registration successful:", response.data);
      toast.success("Registration successful!"); // Display success toast
      // Reset the form data
      setFormData({
        Fname: "",
        Lname: "",
        country: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Registration error:", error);
      if (error.response.status === 400) {
        console.log("Email already exists");
        setRegistrationError("Email already exists");
        toast.error("Email already exists"); // Display error toast
      } else {
        setRegistrationError("Something went wrong");
        toast.error("Something went wrong"); // Display error toast
      }
    } finally {
      setLoading(false);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.Fname) {
      errors.Fname = "First name is required";
    }
    if (!data.Lname) {
      errors.Lname = "Last name is required";
    }
    if (!data.country) {
      errors.country = "Country is required";
    }
    if (!data.phone) {
      errors.phone = "Phone number is required";
    }
    if (!data.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Invalid email format";
    }
    if (!data.password) {
      errors.password = "Password is required";
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <>
      {/* ToastContainer */}
      <ToastContainer />
      <div>
        <label htmlFor="Fname">First Name</label>
        <input
          type="text"
          id="Fname"
          name="Fname"
          value={formData.Fname}
          onChange={handleChange}
          className={`input ${errors.Fname ? "border-red-500" : ""}`}
        />
        {errors.Fname && <p className="text-red-500">{errors.Fname}</p>}
      </div>

      <div>
        <label htmlFor="Lname">Last Name</label>
        <input
          type="text"
          id="Lname"
          name="Lname"
          value={formData.Lname}
          onChange={handleChange}
          className={`input ${errors.Lname ? "border-red-500" : ""}`}
        />
        {errors.Lname && <p className="text-red-500">{errors.Lname}</p>}
      </div>

      <div>
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className={`input ${errors.country ? "border-red-500" : ""}`}
        />
        {errors.country && <p className="text-red-500">{errors.country}</p>}
      </div>

      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`input ${errors.phone ? "border-red-500" : ""}`}
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`input ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`input ${errors.password ? "border-red-500" : ""}`}
          />
          <div
            className="absolute right-3 top-1/3 transform -translate-y-1/2 cursor-pointer text-2xl "
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FaEyeSlash className="text-gray-900" />
            ) : (
              <FaEye className="text-gray-300" />
            )}
          </div>
        </div>
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          className={`input ${errors.confirmPassword ? "border-red-500" : ""}`}
        />
        {errors.confirmPassword && (
          <p className="text-red-500">{errors.confirmPassword}</p>
        )}
      </div>

      <div className="flex align-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
        "
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Register"}
        </button>
        {registrationError && (
          <p className="text-red-600 text-xl font-bold flex  text-center justify-center align-center pt-2">
            {registrationError}
          </p>
        )}
      </div>
    </>
  );
};

export default RegisterForm;
