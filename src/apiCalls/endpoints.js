const BASE_URL = 'http://127.0.0.1:8000';

export const AUTH_ENDPOINTS = {
  LOGIN: `${BASE_URL}/auth/login/`,
  LOGOUT: `${BASE_URL}/auth/logout/`,
  REGISTER: `${BASE_URL}/auth/users/`,
};
export const USER_ENDPOINTS = {
  USER: `${BASE_URL}/auth/users/`,
  GET_USER: (userId) => `${BASE_URL}/auth/users/${userId}/`,
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
  STUDENT: `${BASE_URL}/core/students/`,
  SUBJECT: `${BASE_URL}/core/subjects/`,
  TEACHER: `${BASE_URL}/core/teachers/`,
  GET_ADMIN: (adminId) => `${BASE_URL}/auth/users/${adminId}/`,
  GET_CLASSROOM: (classroomId) => `${BASE_URL}/auth/users/${classroomId}/`,
  GET_STUDENT: (studentId) => `${BASE_URL}/auth/users/${studentId}/`,
  GET_SUBJECT: (subjectId) => `${BASE_URL}/auth/users/${subjectId}/`,
  GET_TEACHER: (teacherId) => `${BASE_URL}/auth/users/${teacherId}/`,
  GET_ASSIGNED_SUBJECTS:  `${BASE_URL}/core/teachers/get_assigned_subjects/`,
  GET_ENROLLED_SUBJECTS:  `${BASE_URL}/core/students/get_enrolled_subjects/`,
};

