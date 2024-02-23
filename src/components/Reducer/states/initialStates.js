export const contextInitialState = {
  user: null,
  auth: false,
  role: null,
  profileImage: null,
  profileThumbnail: null,
  notifications: [],
  isReady: false,
  userStatus: {
    role: null,
    isApproved: false,
    promoted: false,
    assignedSubjects: false,
    enrolledSubject: false,
    madeSuperAdmin: false,
    suspended: false,
  },
};
