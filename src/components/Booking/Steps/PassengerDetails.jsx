import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
const PassengerDetails = ({
  numChildren = 1,
  numAdults = 0,
  tripType,
  classType,
  flight1,
  departureAirport,
  arrivalAirport,
  departureDate,
  returnDate,
  flexibleDates,
}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false); // Add a loading state
  const [childsIds, setChildsIds] = useState([]);
  const [clientsIds, setClientsIds] = useState([]);
  const [formData, setFormData] = useState({
    adults: Array.from({ length: numAdults }, () => ({
      Fname: "",
      Mname: "",
      Lname: "",
      email: "",
      gender: "",
      phone: "",
      country: "",
      state: "",
      street: "",
      passport: "",
      birth: "",
      password: "",
    })),
    childs: Array.from({ length: numChildren }, () => ({
      Fname: "",
      Lname: "",
      birth: "",
      passport: "",
    })),
  });

  const [errors, setErrors] = useState({});
  console.log(formData);
  const handleChange = (e, index, type) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData };
      updatedData[type][index][name] = value;
      return updatedData;
    });
  };
  useEffect(() => {
    console.log(`clientsIds: ${clientsIds}`);
    console.log(`childsIds: ${childsIds}`);
  }, [clientsIds, childsIds]);
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phone);
  };
  const validateCountry = (country) => {
    if (country !== "") {
      return true;
    }
  };

  const validatePassport = (passport) => {
    const passportRegex = /^[A-Za-z]\d{8}$/;
    return passportRegex.test(passport);
  };
  const validateBirthdate = (birthdate) => {
    // check if choose any date
    if (birthdate !== "") {
      // check if date format is valid
      if (formatDate(birthdate) !== "Invalid Date") {
        return true;
      }
    }
  };

  const validateGender = (gender) => {
    if (gender == "male" || gender == "female") {
      return true;
    }
  };

  function formatDate(dateString) {
    var dateParts = dateString.split("-");
    var day = dateParts[2];
    var month = dateParts[1];
    var year = dateParts[0];
    return day + "/" + month + "/" + year;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    const formErrors = {};

    formData.adults.forEach((adult, index) => {
      const birthdate = new Date(adult.birth);
      const today = new Date();
      const age = today.getFullYear() - birthdate.getFullYear();
      const monthDiff = today.getMonth() - birthdate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthdate.getDate())
      ) {
        age--;
      }

      if (age <= 12) {
        formErrors[`adult${index + 1}_birth`] = "Age must be greater than 12";
      }

      if (!adult.Fname) {
        // check if first name is only one word
        if (adult.Fname.split(" ").length > 1) {
          formErrors[`adult${index + 1}_Fname`] =
            "First Name must be only one word";
        } else {
          formErrors[`adult${index + 1}_Fname`] = "First Name is required";
        }
      }

      if (!adult.Lname) {
        formErrors[`adult${index + 1}_Lname`] = "Last Name is required";
      }

      if (!validateEmail(adult.email)) {
        formErrors[`adult${index + 1}_email`] = "Invalid email address";
      }
      if (!validatePassword(adult.password)) {
        formErrors[`adult${index + 1}_password`] =
          "Password must be at least 8 characters long";
      }

      if (!validateGender(adult.gender)) {
        formErrors[`adult${index + 1}_gender`] = "choose your gender";
      }
      if (!validatePhone(adult.phone)) {
        formErrors[`adult${index + 1}_phone`] =
          "Invalid phone number format. It should be 11 digits.";
      }
      if (!validateCountry(adult.country)) {
        formErrors[`adult${index + 1}_country`] = "choose your country";
      }

      if (!validateBirthdate(adult.birth)) {
        formErrors[`adult${index + 1}_birth`] = "choose your birthdate ";
      }
      if (!validatePassport(adult.passport)) {
        formErrors[`adult${index + 1}_passport`] =
          "passport format should start with a letter followed by 8 digits.";
      }
    });

    formData.childs.forEach((child, index) => {
      const birthdate = new Date(child.birth);
      const today = new Date();
      const age = today.getFullYear() - birthdate.getFullYear();
      const monthDiff = today.getMonth() - birthdate.getMonth();
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthdate.getDate())
      ) {
        age--;
      }

      if (age >= 12) {
        formErrors[`child${index + 1}_age`] =
          "Child's age must be less than 12";
      }

      if (!child.Fname) {
        formErrors[`child${index + 1}_Fname`] = "First Name is required";
      }
      if (!child.Lname) {
        formErrors[`child${index + 1}_Lname`] = "Last Name is required";
      }
      if (!validateBirthdate(child.birth)) {
        formErrors[`child${index + 1}_birth`] = "choose your birthdate ";
      }
      if (!validatePassport(child.passport)) {
        formErrors[`child${index + 1}_passport`] =
          "Invalid passport format. It should start with a letter followed by 8 digits.";
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsLoading(true); // Set loading state to true

    const requestData = [
      {
        ...formData.adults[0],
        childs: formData.childs,
      },
      ...formData.adults.slice(1).map(({ childs, ...adult }) => adult),
    ];
    console.log(requestData);
    fetch("http://40.115.44.233:3000/api/user/addMultipleClients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        console.log(response);
        setErrors({});
        if (response.status === 200) {
          return response.json().then((data) => {
            console.log(data);
            setChildsIds(data.childs);
            setClientsIds(data.clients);
            console.log(`childsIds: ${childsIds}, clientsIds: ${clientsIds}`);
            toast.success("Clients added successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
            });

            //navigate to the next page
            navigate("/SeatSelection", {
              state: {
                flight1,
                numChildren,
                numAdults,
                tripType,
                classType,
                departureAirport,
                arrivalAirport,
                departureDate,
                returnDate,
                flexibleDates,
                childsIds: data.childs,
                clientsIds: data.clients,
              },
            });

            return data;
          });
        } else if (response.status === 400) {
          return response.json().then((errorData) => {
            console.error(errorData);
            console.log(errorData.clients);
            console.log(errorData.notAdded.map((client) => client.email));
            console.log(errorData.notAdded.map((client) => client.error));
            toast.error(
              "Error: " +
                errorData.notAdded.map(
                  (client) => client.email + " " + client.error
                ),
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              }
            );
            // setErrors({});
            throw new Error(JSON.stringify(errorData));
          });
        } else {
          throw new Error("Unexpected Error");
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  //   const handleSubmit = (e) => {
  // navigate("/SeatSelection", {
  //   state: {
  //     flight1,
  //     title,
  //     firstName,
  //     lastName,
  //     country,
  //     email,
  //     mobile,
  //     childrenNames,
  //     numChildren,
  //     numAdults,
  //     tripType,
  //     classType,
  //     departureAirport,
  //     arrivalAirport,
  //     departureDate,
  //     returnDate,
  //     flexibleDates,
  //   },
  // });
  //   };

  const renderAdultFields = () => {
    return formData.adults.map((adult, index) => (
      <div key={index} className="border p-4 mb-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Adult {index + 1}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-6 gap-4">
          <div className="col-span-2 sm:col-span-2">
            <label className="block mb-2">
              First Name:
              <input
                type="text"
                name="Fname"
                value={adult.Fname}
                onChange={(e) => handleChange(e, index, "adults")}
                className={`p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 
                ${
                  errors[`adult${index + 1}_Fname`]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors[`adult${index + 1}_Fname`] && (
                <p className="text-red-500 text-xs italic">
                  {errors[`adult${index + 1}_Fname`]}
                </p>
              )}
            </label>
          </div>
          <div className="col-span-2 sm:col-span-2">
            <label className="block mb-2">
              Middle Name:
              <input
                type="text"
                name="Mname"
                value={adult.Mname}
                onChange={(e) => handleChange(e, index, "adults")}
                className="p-2  block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </label>
          </div>
          <div className="col-span-2 sm:col-span-2">
            <label className="block mb-2">
              Last Name:
              <input
                type="text"
                name="Lname"
                value={adult.Lname}
                onChange={(e) => handleChange(e, index, "adults")}
                className={`p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500
                ${
                  errors[`adult${index + 1}_Lname`]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors[`adult${index + 1}_Lname`] && (
                <p className="text-red-500 text-xs italic">
                  {errors[`adult${index + 1}_Lname`]}
                </p>
              )}
            </label>
          </div>

          <div>
            <label className="block mb-2">
              Gender:
              <select
                name="gender"
                value={adult.gender}
                onChange={(e) => handleChange(e, index, "adults")}
                className={`p-2  block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500
                ${
                  errors[`adult${index + 1}_gender`]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors[`adult${index + 1}_gender`] && (
                <p className="text-red-500 text-xs italic">
                  {errors[`adult${index + 1}_gender`]}
                </p>
              )}
            </label>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2">
              Country:
              <input
                type="text"
                name="country"
                value={adult.country}
                onChange={(e) => handleChange(e, index, "adults")}
                className={`p-2  block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500
                ${
                  errors[`adult${index + 1}_country`]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors[`adult${index + 1}_country`] && (
                <p className="text-red-500 text-xs italic">
                  {errors[`adult${index + 1}_country`]}
                </p>
              )}
            </label>
          </div>
          <div className="col-span-2 sm:col-span-2">
            <label className="block mb-2">
              Phone:
              <input
                type="text"
                name="phone"
                value={adult.phone}
                onChange={(e) => handleChange(e, index, "adults")}
                className={`p-2  block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500
                ${
                  errors[`adult${index + 1}_phone`]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors[`adult${index + 1}_phone`] && (
                <p className="text-red-500 text-xs italic">
                  {errors[`adult${index + 1}_phone`]}
                </p>
              )}
            </label>
          </div>
          <div className="col-span-2 sm:col-span-2">
            <label className="block mb-2">
              Birthdate:
              <input
                type="date"
                name="birth"
                value={adult.birth}
                onChange={(e) => handleChange(e, index, "adults")}
                className={`p-2  block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors[`adult${index + 1}_birth`] ? "border-red-500" : ""
                }`}
              />
              {errors[`adult${index + 1}_birth`] && (
                <p className="text-red-500 text-sm">
                  {errors[`adult${index + 1}_birth`]}
                </p>
              )}
              {errors[`adult${index + 1}_age`] && (
                <p className="text-red-500 text-sm">
                  {errors[`adult${index + 1}_age`]}
                </p>
              )}
            </label>
          </div>
          <div className="col-span-2 sm:col-span-2">
            <label className="block mb-2">
              Passport:
              <input
                type="text"
                name="passport"
                value={adult.passport}
                onChange={(e) => handleChange(e, index, "adults")}
                className={`p-2  block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors[`adult${index + 1}_passport`] ? "border-red-500" : ""
                }`}
              />
              {errors[`adult${index + 1}_passport`] && (
                <p className="text-red-500 text-sm">
                  {errors[`adult${index + 1}_passport`]}
                </p>
              )}
            </label>
          </div>

          <div className="col-span-2 sm:col-span-2">
            <label className="block mb-2">
              Email:
              <input
                type="email"
                name="email"
                value={adult.email}
                onChange={(e) => handleChange(e, index, "adults")}
                className={`p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500
                ${
                  errors[`adult${index + 1}_email`]
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors[`adult${index + 1}_email`] && (
                <p className="text-red-500 text-xs italic">
                  {errors[`adult${index + 1}_email`]}
                </p>
              )}
            </label>
          </div>
          <div className="col-span-2 sm:col-span-2">
            <label className="block mb-2">
              Password:
              <input
                type="password"
                name="password"
                value={adult.password}
                onChange={(e) => handleChange(e, index, "adults")}
                className={`p-2  block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors[`adult${index + 1}_password`] ? "border-red-500" : ""
                }`}
              />
              {errors[`adult${index + 1}_password`] && (
                <p className="text-red-500 text-sm">
                  {errors[`adult${index + 1}_password`]}
                </p>
              )}
            </label>
          </div>
        </div>
      </div>
    ));
  };

  const renderChildFields = () => {
    return formData.childs.map((child, index) => (
      <div key={index} className="border p-4 mb-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">
          Child {index + 1}
          <p className="text-sm text-red-500">
            (must be less than 12 years old)
          </p>
        </h2>
        {/* {errors[`child${index + 1}_age`] && (
          <p className="text-red-500 text-sm mb-2">
            {errors[`child${index + 1}_age`]}
          </p>
        )} */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2">
              First Name:
              <input
                type="text"
                name="Fname"
                value={child.Fname}
                onChange={(e) => handleChange(e, index, "childs")}
                className={`p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors[`child${index + 1}_Fname`] ? "border-red-500" : ""
                }`}
              />
              {errors[`child${index + 1}_Fname`] && (
                <p className="text-red-500 text-sm">
                  {errors[`child${index + 1}_Fname`]}
                </p>
              )}
            </label>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2">
              Last Name:
              <input
                type="text"
                name="Lname"
                value={child.Lname}
                onChange={(e) => handleChange(e, index, "childs")}
                className={`p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors[`child${index + 1}_Lname`] ? "border-red-500" : ""
                }`}
              />
              {errors[`child${index + 1}_Lname`] && (
                <p className="text-red-500 text-sm">
                  {errors[`child${index + 1}_Lname`]}
                </p>
              )}
            </label>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="block mb-2">
              Birthdate:
              <input
                type="date"
                name="birth"
                value={child.birth}
                onChange={(e) => handleChange(e, index, "childs")}
                className={`p-1 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 
                ${errors[`child${index + 1}_birth`] ? "border-red-500" : ""}`}
              />
              {errors[`child${index + 1}_birth`] && (
                <p className="text-red-500 text-sm">
                  {errors[`child${index + 1}_birth`]}
                </p>
              )}
              {errors[`child${index + 1}_age`] && (
                <p className="text-red-500 text-sm mb-2">
                  {errors[`child${index + 1}_age`]}
                </p>
              )}
            </label>
          </div>
          <div className="col-span-2 sm:col-span-2">
            <label className="block mb-2">
              Passport:
              <input
                type="text"
                name="passport"
                value={child.passport}
                onChange={(e) => handleChange(e, index, "childs")}
                className={`p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${
                  errors[`child${index + 1}_passport`] ? "border-red-500" : ""
                }`}
              />
              {errors[`child${index + 1}_passport`] && (
                <p className="text-red-500 text-sm">
                  {errors[`child${index + 1}_passport`]}
                </p>
              )}
            </label>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="border p-4 m-8 rounded-lg bg-white">
        <form onSubmit={handleSubmit} className="p-4">
          {renderAdultFields()}
          {renderChildFields()}
          {isLoading ? (
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              disabled
            >
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle
                  className="animate-circle text-transparent"
                  cx="12"
                  cy="12"
                  r="10"
                  strokeWidth="4"
                  fill="none"
                  stroke="white"
                ></circle>
              </svg>
              Loading...
            </button>
          ) : (
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default PassengerDetails;
