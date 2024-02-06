export const notificationMessages = (userStatus) => {
  if (!userStatus.isApproved) {
    return {
      type: "warning",
      title: "Account Limitation",
      subtitle:
        "Access to certain pages is currently restricted until your account is approved. Once your account is approved, you will have full access.",
      cancelButton: false,
    };
  } else if (userStatus.suspended) {
    return {
      type: "danger",
      title: "Account Suspended!",
      subtitle:
        "Your account has been suspended. Please contact support for further assistance.",
      cancelButton: false,
    };
  } else if (userStatus.assignedSubjects) {
    return {
      type: "success",
      title: "Subject Assigned",
      subtitle:
        "You have been assigned subjects. Enjoy navigating through the pages!",
      cancelButton: true,
    };
  } else if (userStatus.enrolledSubject) {
    return {
      type: "success",
      title: "Subject Enrolled",
      subtitle:
        "You have successfully enrolled in subjects. Enjoy navigating through the pages!",
      cancelButton: true,
    };
  } else if (userStatus.madeSuperAdmin || userStatus.promoted) {
    return {
      type: "success",
      title: "Congratulations!",
      subtitle:
        "You have achieved something great! Enjoy navigating through the pages!",
      cancelButton: true,
    };
  } else {
    return null;
  }
};
