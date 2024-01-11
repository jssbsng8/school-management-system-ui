import { FiShoppingBag, FiUsers } from "react-icons/fi";
import { BsCurrencyDollar } from "react-icons/bs";

export const stats = [
  {
    id: 1,
    title: "Total Students",
    amount: "12",
    icon: <FiShoppingBag />,
    iconColor: "#6427ff",
    iconBg: "rgba(100, 39, 255, 0.2)",
    isMoney: false,
  },
  {
    id: 2,
    title: "Total Income",
    amount: "195,800",
    icon: <BsCurrencyDollar />,
    iconColor: "#c49c1a",
    iconBg: "rgba(196, 156, 26, 0.2)",
    isMoney: true,
  },
  {
    id: 3,
    title: "Total Users",
    amount: "14",
    icon: <FiUsers />,
    iconColor: "#fd4332",
    iconBg: "rgba(253, 67, 50, 0.2)",
    isMoney: false,
  },
];
