import { successToast } from "../components/utils/toastUtils";

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
            const message = `Fetch User Failed:, ${response.statusText}`
            successToast(message);
        }
    } catch (error) {
        const message = `Error during logout: ${error}`
        successToast(message);
    }
}


// // ======================= REGISTRATION =======================
// const URL = AUTH_ENDPOINTS.REGISTER
// try {
//     const response = await fetch(URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//         mode: 'cors'
//     })
//     if(response.ok){
//         const message = 'Registration Successful!, check your email for activation link'
//         successToast(message);
//         await new Promise(resolve => setTimeout(resolve, 2000));
//         setLoading(false);
//         navigate("/login");
//     }else{
//         const message = `Registration failed:, ${response.statusText}`
//         errorToast(message);
//     }
// }
// catch(error){
//     const message = `Error during registration: ${error}`
//     successToast(message);
// }