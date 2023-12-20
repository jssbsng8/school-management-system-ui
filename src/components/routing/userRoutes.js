// Define role-based route configurations
import { Route } from "react-router-dom";
import {
    AddProduct,
    Brands,
    Inbox,
    Orders,
    OrderTemplate,
    ProductCategories,
    Products,
    Reviews,
    SalesAnalytics,
    Settings,
    SingleCustomer,
    SingleOrder,
    SingleProduct,
    Transactions,
    Timetable,
    Teachers,
    SingleTeacher,
    Subjects,
    Classmates,
    Dashboard,
    ExamResult,
    ExamSchedule,
    Attendance,
    GeneralResult,
    StudentLeave,
    StudentLeaveApply
  } from '../../pages';
  
export const roleRoutes = {
    Admin: [
      // Admin Routes
      <Route key="admin-dashboard" path="/" element={<Dashboard />} />,
      <Route key="admin-products" path="/products" element={<Products />} />,
    ],
    Teacher: [
      // Teacher Routes
      <Route key="teacher-dashboard" path="/" element={<Dashboard />} />,
      <Route key="teacher-products" path="/products" element={<Products />} />,
    ],
    Student: [
      // Student Routes
        <Route path="/" element={<Dashboard />} />,
        <Route path="/products" element={<Products />} />,
        <Route path="/products/add" element={<AddProduct />} />,
        <Route path="/products/:id" element={<SingleProduct />} />,
        <Route path="/products/categories" element={<ProductCategories />} />,
        <Route path="/timetable" element={<Timetable />} />,
        <Route path="/teachers" element={<Teachers />} />,
        <Route path="/subjects" element={<Subjects />} />,
        <Route path="/classmates" element={<Classmates />} />,
        <Route path="/customers/:id" element={<SingleCustomer />} />,
        <Route path="/teachers/:id" element={<SingleTeacher />} />,
        <Route path="/sales/analysis" element={<SalesAnalytics />} />,
        <Route path="/exam_result" element={<ExamResult />} />,
        <Route path="/orders" element={<Orders />} />,
        <Route path="/orders/template" element={<OrderTemplate />} />,
        <Route path="/orders/:id" element={<SingleOrder />} />,
        <Route path="/attendance" element={<Attendance />} />,
        <Route path="/transactions" element={<Transactions />} />,
        <Route path="/leave" element={<StudentLeave />} />,
        <Route path="/leave/apply" element={<StudentLeaveApply />} />,
        <Route path="/reviews" element={<Reviews />} />,
        <Route path="/settings" element={<Settings />} />,
        <Route path="/reviews" element={<Reviews />} />,
        <Route path="/inbox" element={<Inbox />} />,
        <Route path="/exam_schedules" element={<ExamSchedule />} />,
        <Route path="/results" element={<GeneralResult />} />,
    ],
  };

//   export const userRoutes = roleRoutes[role] || roleRoutes.Student; // Default to Student if role is not recognized