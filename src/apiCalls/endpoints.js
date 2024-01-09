// const BASE_URL = "http://127.0.0.1:8000";
const BASE_URL = "https://school-management-system-khaki-nine.vercel.app";

export const AUTH_ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login/`,
  LOGOUT: `${BASE_URL}/auth/logout/`,
  REGISTER: `${BASE_URL}/auth/users/`,
};
export const USER_ENDPOINTS = {
  USER: `${BASE_URL}/auth/users/`,
  UPLOAD_IMAGE: `${BASE_URL}/auth/profile-image/`,
  GET_OR_UPDATE_USER: (userId) => `${BASE_URL}/auth/users/${userId}/`,
  PROFILE_IMAGE: (userId) => `${BASE_URL}/auth/profile-image/?user=${userId}`,
  ACTIVATION: `${BASE_URL}/authusers/activation/`,
  AUTHENTICATED_USER: `${BASE_URL}/authusers/me/`,
  RESEND_ACTIVATION: `${BASE_URL}/authusers/resend_activation/`,
  RESET_PASSWORD: `${BASE_URL}/authusers/reset_password/`,
  CONFIRM_RESET_PASSWORD: `${BASE_URL}/authusers/reset_password_confirm/`,
  SET_PASSWORD: `${BASE_URL}/authusers/set_password/`,
};

export const CORE = {
  ADMIN: `${BASE_URL}/core/admin/`,
  CLASSROOM: `${BASE_URL}/core/classrooms/`,
  STUDENT: `${BASE_URL}/core/students`,
  SUBJECT: `${BASE_URL}/core/subjects/`,
  FILTERED_SUBJECT: `${BASE_URL}/core/subjects/?class_room=10`,
  TEACHER: `${BASE_URL}/core/teachers`,
  GET_ASSIGNED_SUBJECTS: `${BASE_URL}/core/teachers/get_assigned_subjects/`,
  GET_ENROLLED_SUBJECTS: `${BASE_URL}/core/students/get_enrolled_subjects/`,
  GET_ADMIN: (adminId) => `${BASE_URL}/auth/users/${adminId}/`,
  GET_CLASSROOM: (classroomId) => `${BASE_URL}/core/classrooms/${classroomId}/`,
  GET_SUBJECT: (subjectId) => `${BASE_URL}/core/subjects/${subjectId}/`,
  GET_FILTERED_SUBJECT: (classroomId) =>
    `${BASE_URL}/core/subjects/?class_room=${classroomId}`,
  GET_STUDENT: (studentId) => `${BASE_URL}/core/students/${studentId}/`,
  GET_TEACHER: (teacherId) => `${BASE_URL}/core/teachers/${teacherId}/`,
};
