import React from "react";
import Authorization from "./Authorization";

const AdminDashboard = () => {
  return <div>Admin Dashboard</div>;
};

const UserDashboard = () => {
  return <div>User Dashboard</div>;
};

const Unauthorized = () => {
  return <div>You are not authorized to access this page</div>;
};

const AdminDashboardAuthorized = Authorization(AdminDashboard, ["admin"]);
const UserDashboardAuthorized = Authorization(UserDashboard, ["user"]);
const UnauthorizedAuthorized = Authorization(Unauthorized, ["admin", "user"]);

export { AdminDashboardAuthorized, UserDashboardAuthorized, UnauthorizedAuthorized };
