import { HiOutlineClipboardList } from "react-icons/hi";
import { FaRegCalendarCheck } from "react-icons/fa";
import {
  MdOutlineRateReview,
  MdCheckCircleOutline,
  MdNotificationsNone,
} from "react-icons/md";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { GiBlackBook } from "react-icons/gi";
import { IoMdCheckboxOutline } from "react-icons/io";
import {
  FiHome,
  FiMail,
  FiMessageCircle,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

export const navigationLinks = (role) => {
  if (role === "Admin") {
    return [
      {
        name: "Dashboard",
        icon: <FiHome />,
        url: "/",
      },
      {
        name: "Activities",
        icon: <HiOutlineClipboardList />,
        subLinks: [
          {
            name: "Students",
            url: "/students",
          },
          {
            name: "Teachers",
            url: "/teachers",
          },
          {
            name: "Parents",
            url: "/parent",
          },
          {
            name: "Results",
            url: "/results",
          },
          {
            name: "Timetable",
            url: "/timetable",
          },
        ],
      },
      {
        name: "Examination",
        icon: <GiBlackBook />,
        subLinks: [
          {
            name: "Exam Schedules",
            url: "/sales/analysis",
          },
          {
            name: "Exam Results",
            url: "results",
          },
        ],
      },
      {
        name: "Results",
        icon: <IoMdCheckboxOutline />,
        url: "/transactions",
      },
      {
        name: "Certificate",
        icon: <FaRegCalendarCheck />,
        subLinks: [
          {
            name: "Student Certificate",
            url: "/student-certificate",
          },
          {
            name: "Generate Certificate",
            url: "/generate-student-certificate",
          },
          {
            name: "Student ID Card",
            url: "/student-id-card",
          },
          {
            name: "Generate ID Card",
            url: "/generate-student-id-card",
          },
          {
            name: "Staff ID Card",
            url: "/staff-id-card",
          },
          {
            name: "Generate Staff ID Card",
            url: "/staff-id-card",
          },
        ],
      },
      {
        name: "Communications",
        icon: <FaRegCalendarCheck />,
        subLinks: [
          {
            name: "Notice Board",
            url: "/notice-board",
          },
          {
            name: "Send Email",
            url: "/send-email",
          },
          {
            name: "Notification/Email Logs",
            url: "/notification-email-logs",
          },
        ],
      },
      {
        name: "Notifications",
        icon: <MdNotificationsNone />,
        url: "/brands",
      },
      {
        name: "Reviews",
        icon: <MdOutlineRateReview />,
        subLinks: [
          {
            name: "Teachers Review",
            url: "/reviews",
          },
          {
            name: "Student Review",
            url: "/reviews",
          },
        ],
      },
      {
        name: "Documentation",
        icon: <IoDocumentAttachOutline />,
        subLinks: [
          {
            name: "Admission Report",
            url: "/admission-report",
          },
          {
            name: "Attendance Report",
            url: "/attendance-report",
          },
          {
            name: "Students History",
            url: "/students-history",
          },
          {
            name: "Teachers History",
            url: "/teachers-history",
          },
        ],
      },
      {
        name: "System Settings",
        icon: <FiSettings />,
        subLinks: [
          {
            name: "General Settings",
            url: "/general-settings",
          },
          {
            name: "Session Settings",
            url: "session-settings",
          },
          {
            name: "Notification Settings",
            url: "/orders/template",
          },
          {
            name: "Users Settings",
            url: "/users",
          },
        ],
      },
      {
        name: "Settings",
        icon: <FiSettings />,
        url: "/settings",
      },
      {
        name: "Inbox",
        icon: <FiMessageCircle />,
        url: "/inbox",
      },
    ];
  } else if (role === "Teacher") {
    return [
      {
        name: "Dashboard",
        icon: <FiHome />,
        url: "/",
      },
      {
        name: "Activities",
        icon: <HiOutlineClipboardList />,
        subLinks: [
          {
            name: "Students",
            url: "/students",
          },
          {
            name: "Subjects Taken",
            url: "/subjects",
          },
          {
            name: "Class Rooms",
            url: "/classrooms",
          },
        ],
      },
      {
        name: "Class Timetable",
        icon: <FiUsers />,
        url: "/timetable",
      },
      {
        name: "Examination",
        icon: <GiBlackBook />,
        subLinks: [
          {
            name: "Exam Schedules",
            url: "/exam_schedules",
          },
          {
            name: "Exam Results",
            url: "/results",
          },
          {
            name: "Record Results",
            url: "/record_result",
          },
        ],
      },
      {
        name: "Attendance",
        icon: <FaRegCalendarCheck />,
        url: "/suppliers",
        subLinks: [
          {
            name: "Take Attendance",
            url: "/take_attendance",
          },
          {
            name: "Attendance Record",
            url: "/view_attendance",
          },
          {
            name: "Leave Requests",
            url: "/leave_requests",
          },
        ],
      },

      {
        name: "Notifications",
        icon: <MdNotificationsNone />,
        url: "/brands",
      },
      {
        name: "Apply Leave",
        icon: <MdCheckCircleOutline />,
        url: "/leave",
      },
      {
        name: "Reviews",
        icon: <MdOutlineRateReview />,
        subLinks: [
          {
            name: "Student Reviews",
            url: "/teachers_reviews",
          },
        ],
      },
      {
        name: "Documentation",
        icon: <IoDocumentAttachOutline />,
        subLinks: [
          {
            name: "Registration Information",
            url: "/registration-information",
          },
        ],
      },
      {
        name: "Settings",
        icon: <FiSettings />,
        url: "/settings",
      },
      {
        name: "Inbox",
        icon: <FiMessageCircle />,
        url: "/inbox",
      },
    ];
  } else {
    return [
      {
        name: "Dashboard",
        icon: <FiHome />,
        url: "/",
      },
      {
        name: "Activities",
        icon: <HiOutlineClipboardList />,
        subLinks: [
          {
            name: "Teachers",
            url: "/teachers",
          },
          {
            name: "Registered Subjects",
            url: "/subjects",
          },
          {
            name: "Class Mates",
            url: "/classmates",
          },
        ],
      },
      {
        name: "Class Timetable",
        icon: <FiUsers />,
        url: "/timetable",
      },
      {
        name: "Examination",
        icon: <GiBlackBook />,
        subLinks: [
          {
            name: "Exam Schedules",
            url: "/exam_schedules",
          },
          {
            name: "Exam Results",
            url: "/exam_result",
          },
        ],
      },
      {
        name: "Attendance",
        icon: <FaRegCalendarCheck />,
        url: "/attendance",
      },
      {
        name: "Results",
        icon: <IoMdCheckboxOutline />,
        url: "/results",
      },
      {
        name: "Notifications",
        icon: <MdNotificationsNone />,
        url: "/brands",
      },
      {
        name: "Apply Leave",
        icon: <MdCheckCircleOutline />,
        url: "/leave",
      },
      {
        name: "Reviews",
        icon: <MdOutlineRateReview />,
        subLinks: [
          {
            name: "Teachers Reviews",
            url: "/teachers_reviews",
          },
        ],
      },
      {
        name: "Documentation",
        icon: <IoDocumentAttachOutline />,
        subLinks: [
          {
            name: "Registration Information",
            url: "/orders",
          },
          {
            name: "Fees Breakdown",
            url: "/orders/template",
          },
        ],
      },
      {
        name: "Notice Board",
        icon: <FiMail />,
        url: "/notice_board",
      },
      {
        name: "Settings",
        icon: <FiSettings />,
        url: "/settings",
      },
      {
        name: "Inbox",
        icon: <FiMessageCircle />,
        url: "/inbox",
      },
    ];
  }
};
