import React from "react";
import {
  FaUser,
  FaPlane,
  FaBook,
  FaHeadset,
  FaChartLine,
  FaCog,
  FaUserShield,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white py-4 px-8">
      <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
      <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Logout
      </button>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, path }) => {
  return (
    <Link to={path} className="no-underline">
      <div className="bg-white rounded shadow p-6 flex items-center">
        <div className="bg-blue-500 text-white rounded-full p-4">{icon}</div>
        <div className="ml-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

const AdminDashboard = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <div className="container mx-auto my-8">
        <div className="grid grid-cols-2 gap-4">
          <FeatureCard
            icon={<FaUser className="text-4xl" />}
            title="User Management"
            description="Manage user accounts and permissions."
            path="/user-management"
          />
          <FeatureCard
            icon={<FaPlane className="text-4xl" />}
            title="Flight Management"
            description="Add, edit, and remove flights."
            path="/flight-management"
          />
          <FeatureCard
            icon={<FaBook className="text-4xl" />}
            title="Booking Management"
            description="View and manage flight bookings."
            path="/booking-management"
          />

          <FeatureCard
            icon={<FaUserShield className="text-4xl" />}
            title="Employee Management"
            description="View and manage employee accounts."
            path="/EmployeeManagement"
          />

          <FeatureCard
            icon={<FaHeadset className="text-4xl" />}
            title="Customer Support"
            description="Manage customer support requests."
            path="/customer-support"
          />
          <FeatureCard
            icon={<FaChartLine className="text-4xl" />}
            title="Analytics and Reports"
            description="Generate insights and reports."
            path="/analytics-reports"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
