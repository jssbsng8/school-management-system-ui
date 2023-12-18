import { errorToast } from "../components/utils/toastUtils";

// ======================= GET AUTHENTICATED USER DATA =======================

export const athenticatedUser = async (url) => {
    try {
        const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${localStorage.getItem('token')}`,
        },
        });
    
        if (response.ok) {
            const responseData = await response.json();
            return JSON.stringify(responseData);
        } else {
            // const message = `Access Denied: ${response.statusText}!`
            // errorToast(message);
            return
        }
    } catch (error) {
        const message = `Error during logout: ${error}`
        errorToast(message);
    }
}


