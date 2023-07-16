import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLogin from "./components/Login/AdninLogin/AdminLogin";

import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Flights from "./components/Flights/Flights";
import Footer from "./components/Footer/Footer";
import ResultsOneWay from "./components/Booking/Results/ResultsOneWay";
import ResultsReturn from "./components/Booking/Results/ResultsReturn";
import FlightDetails from "./components/Booking/FlightDetails";
import FlightSearchForm from "./components/Booking/Searching/FlightSearchForm";

import PassengerDetails from "./components/Booking/Steps/PassengerDetails";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./components/Footer/TermsAndConditions/TermsAndConditions";
import Profile from "./components/Profile/User/Profile";

//seat
import SeatSelection from "./components/Booking/Steps/SeatSelection";

//payment
import PaymentOptions from "./components/Booking/Steps/PaymentOptions";

// Ticket
import Ticket from "./components/Booking/Steps/Ticket";

// Admin pages
import AdminDashboard from "./components/Profile/Admin/AdminDashboard";
import UserManagement from "./components/Profile/Admin/Rules/UserManagement/UserManagement";
import FlightManagement from "./components/Profile/Admin/Rules/FlightManagement/FlightManagement";
import AnalyticsReports from "./components/Profile/Admin/Rules/AnalyticsReports/AnalyticsReports";
import BookingManagement from "./components/Profile/Admin/Rules/BookingManagement/BookingManagement";
import SystemSettings from "./components/Profile/Admin/Rules/SystemSettings/SystemSettings";
import CustomerSupport from "./components/Profile/Admin/Rules/CustomerSupport/CustomerSupport";
import EmployeeManagement from "./components/Profile/Admin/Rules/UserManagement/EmployeeManagement";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />
          {/* Flights page to show all flights */}
          <Route path="/flights" element={<Flights />} />
          {/* Login page */}
          <Route path="/login" element={<Login />} />

          {/* Admin login page */}
          <Route path="/admin-login" element={<AdminLogin />} />

          <Route path="/FlightSearchForm" element={<FlightSearchForm />} />
          {/* the result of searched OneWay flights */}
          <Route path="/ResultsOneWay" element={<ResultsOneWay />} />
          {/* the result of searched Return flights */}
          <Route path="/ResultsReturn" element={<ResultsReturn />} />
          <Route path="/FlightDetails" element={<FlightDetails />} />
          {/* Passenger details page */}
          <Route path="/PassengerDetails" element={<PassengerDetails />} />
          {/* Seat selection page */}
          <Route path="/SeatSelection" element={<SeatSelection />} />

          {/* Payment options page */}
          <Route path="/PaymentOptions" element={<PaymentOptions />} />

          {/* Ticket page */}
          <Route path="/Ticket" element={<Ticket />} />
          {/* Privacy policy page */}
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          {/* Terms and conditions page */}
          <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
          {/* Profile page */}

          <Route element={<PrivateRoute component={Profile} />} />
          <Route element={<PrivateRoute component={AdminDashboard} />} />

          <Route path="/Profile" element={<Profile />} />

          {/* Admin dashboard page */}
          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          {/* User management page */}
          <Route path="/user-management" element={<UserManagement />} />

          {/* Flight management page */}
          <Route path="/flight-management" element={<FlightManagement />} />

          {/* Booking management page */}
          <Route path="/booking-management" element={<BookingManagement />} />

          {/* Employee management page */}
          <Route path="/EmployeeManagement" element={<EmployeeManagement />} />

          {/* Customer support page */}
          <Route path="/customer-support" element={<CustomerSupport />} />

          {/* Analytics reports page */}
          <Route path="/analytics-reports" element={<AnalyticsReports />} />

          {/* System settings page */}
          <Route path="/system-settings" element={<SystemSettings />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </HashRouter>
    </>
  );
};

export default App;
