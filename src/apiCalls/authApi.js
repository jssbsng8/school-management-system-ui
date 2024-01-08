import { errorToast } from "../components/utils/toastUtils";
import { CORE } from "../apiCalls/endpoints";
// ======================= GET AUTHENTICATED USER DATA =======================

export const athenticatedUser = async (url) => {
  /*
        The 'authenticatedUser' function performs an authenticated user data retrieval by making
        a GET request to the specified 'url'. It includes the user's authentication token in the
        request headers. If the response is successful, it returns the JSON string representation
        of the user data; otherwise, it returns null. Any errors during the process trigger a
        notification toast.
    */
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      return JSON.stringify(responseData);
    } else {
      return null;
    }
  } catch (error) {
    const message = `Error during logout: ${error}`;
    errorToast(message);
  }
};

export const get_assigned_subjects = async (url) => {
  /*
        The 'get_assigned_subjects' function fetches the subjects assigned to a teacher by making
        a GET request to the provided 'url'. It includes the teacher's authentication token in the
        request headers. If the response is successful, it returns the JSON string representation
        of the assigned subjects; otherwise, it displays an error toast with the error message.
    */
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      return JSON.stringify(responseData);
    } else {
      const errorMessage = await response.text();
      console.log(errorMessage);
      errorToast(errorMessage);
    }
  } catch (error) {
    const message = `Error getting assigned subjects: ${error}`;
    errorToast(message);
  }
};

export const get_enrolled_subjects = async (url) => {
  /*
        The 'get_enrolled_subjects' function retrieves the subjects in which a student is enrolled
        by making a GET request to the specified 'url'. It includes the student's authentication token
        in the request headers. If the response is successful, it returns the JSON string representation
        of the enrolled subjects; otherwise, it returns an error message.
    */
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      return JSON.stringify(responseData);
    } else {
      const errorMessage = await response.text();
      console.log(errorMessage);
      return errorMessage;
    }
  } catch (error) {
    const message = `Error getting enrolled subjects: ${error}`;
    errorToast(message);
  }
};

export const fetchSubjects = async (setSubject) => {
  /*
        The 'fetchSubjects' function is a utility function for fetching and updating the subjects based on
        the user's role. It uses the 'getRole' to determine whether the user is a student or teacher and
        then calls the corresponding subject-fetching function. The fetched subjects are updated using
        the 'setSubject' callback.
    */
  try {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const getRole = userData ? userData.role : null;
    if (getRole === "Student") {
      const enrolledSubjectsJsonString = await get_enrolled_subjects(
        CORE.GET_ENROLLED_SUBJECTS
      );
      const enrolledSubjects = JSON.parse(enrolledSubjectsJsonString);
      setSubject(enrolledSubjects);
    } else if (getRole === "Teacher") {
      const assignedSubjectsJsonString = await get_assigned_subjects(
        CORE.GET_ASSIGNED_SUBJECTS
      );
      const assignedSubjects = JSON.parse(assignedSubjectsJsonString);
      setSubject(assignedSubjects);
    }
  } catch (error) {
    console.error("Error fetching enrolled subjects:", error);
  }
};

export const updateUserProfile = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      return JSON.stringify(responseData);
    } else {
      const errorMessage = await response.text();
      console.log(errorMessage);
      errorToast(errorMessage);
      return null;
    }
  } catch (error) {
    const message = `Error updating user profile: ${error}`;
    errorToast(message);
    return null;
  }
};

export const getFetchedData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });
    if (response.ok) {
      const responseData = await response.json();
      return responseData;
    } else {
      const errorMessage = await response.text();
      console.log(errorMessage);
      errorToast(errorMessage);
    }
  } catch (error) {
    const message = `Error getting assigned subjects: ${error}`;
    errorToast(message);
  }
};

export const postRequest = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return true;
    } else {
      const errorMessage = await response.text();
      console.log(errorMessage);
      errorToast(errorMessage);
      return false;
    }
  } catch (error) {
    const message = `${error}`;
    errorToast(message);
    return false;
  }
};

export const patchRequest = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // const responseData = await response.json();
      // return responseData;
      return true;
    } else {
      const errorMessage = await response.text();
      console.log(errorMessage);
      // errorToast(errorMessage);
      return false;
    }
  } catch (error) {
    const message = `Error updating user profile: ${error}`;
    console.error(message)
    return false;
  }
};

export const deleteRequest = async (url) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) {
      // const responseData = await response.json();
      return true;
    } else {
      const errorMessage = await response.text();
      console.log(errorMessage);
      errorToast(errorMessage);
      return false;
    }
  } catch (error) {
    const message = `Error deleting data: ${error}`;
    errorToast(message);
    console.log(message);
    return false;
  }
};

export const patchRequestImageUpload = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      body: data,
    });

    if (!response.ok) {
      throw new Error("Failed to update profile image");
    }else{
      return true;
    }
  } catch (error) {
    const message = `Error updating user profile: ${error}`;
    throw new Error(message);
  }
};
