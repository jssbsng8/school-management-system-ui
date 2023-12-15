import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Sidebar from "./components/common/Sidebar";
import Dashboard from "./pages/Dashboard";
// import AdminDashboard from "./pages/AdminDashboard";
import Authentication from "./pages/Authentication"
import Navbar from "./components/common/Navbar";
import {
  AddProduct,
  Brands,
  // Customers,
  Inbox,
  Orders,
  OrderTemplate,
  ProductCategories,
  Products,
  ProductSales,
  Reviews,
  SalesAnalytics,
  Settings,
  SingleCustomer,
  SingleOrder,
  SingleProduct,
  Suppliers,
  Transactions,
  Timetable,
  Teachers,
  SingleTeacher,
  Subjects,
  Classmates,
  AdminDashboard
} from "./pages";
import Footer from "./components/common/Footer";
import useLoggedInUser from "./data/loggedInUser";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const sideBarWidth = 250;

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const auth = true; 
  const {auth } = useLoggedInUser();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {auth ? (
        <Box sx={{ display: "flex" }}>
          <Navbar
            sideBarWidth={sideBarWidth}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Sidebar
            sideBarWidth={sideBarWidth}
            mobileOpen={mobileOpen}
            handleDrawerToggle={handleDrawerToggle}
          />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              px: { xs: 1, md: 2 },
              width: { xs: "100%", md: `calc(100% - ${sideBarWidth}px)` },
            }}
          >
            {/* Routes */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/" element={<AdminDashboard />} /> */}
              <Route path="/products" element={<Products />} />
              <Route path="/products/add" element={<AddProduct />} />
              <Route path="/products/:id" element={<SingleProduct />} />
              <Route path="/products/categories" element={<ProductCategories />} />
              <Route path="/timetable" element={<Timetable />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/classmates" element={<Classmates />} />
              <Route path="/customers/:id" element={<SingleCustomer />} />
              <Route path="/teachers/:id" element={<SingleTeacher />} />
              <Route path="/sales/analysis" element={<SalesAnalytics />} />
              <Route path="/sales" element={<ProductSales />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/orders/template" element={<OrderTemplate />} />
              <Route path="/orders/:id" element={<SingleOrder />} />
              <Route path="/suppliers" element={<Suppliers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/inbox" element={<Inbox />} />
            </Routes>
            <Footer />
          </Box>
        </Box>
      ) : (
        <>
        <Routes>
          <Route path="/login" element={<Authentication />} />
        </Routes>
        <ToastContainer />
        </>
      )}
    </>
  );
}

export default App;
