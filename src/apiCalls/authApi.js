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
        } 
        else {
            return null
        }
    } catch (error) {
        const message = `Error during logout: ${error}`
        errorToast(message);
    }
}

export const get_assigned_subjects = async(url) => {
    console.log(`Token ${localStorage.getItem('token')}`);
    try{
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`,
            }
        });
        if(response.ok){
            const responseData = await (response.json())
            return JSON.stringify(responseData);
        }
        else{
            const errorMessage = await response.text();
            console.log(errorMessage);
            errorToast(errorMessage)
        }
    }
    catch (error){
        const message = `Error getting assigned subjects: ${error}`
        errorToast(message)
    }
}


export const get_enrolled_subjects = async(url) => {
    try{
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${localStorage.getItem('token')}`,
            }
        });
        if(response.ok){
            const responseData = await (response.json())
            return JSON.stringify(responseData);
        }
        else{
            const errorMessage = await response.text();
            console.log(errorMessage);
            return errorMessage
        }
    }
    catch (error){
        const message = `Error getting enrolled subjects: ${error}`
        errorToast(message)
    }
}