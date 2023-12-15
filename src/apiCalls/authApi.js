



// ======================= LOG IN =======================
const apiUrl = 'http://127.0.0.1:8000/auth/login/';
try {
const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, username }),
    mode: 'cors',
});

if (!response.ok) {
    const errorMessage = await response.text();
    console.log(errorMessage);
    if (response.status === 400){
    const message = 'Incorrect Username or password'
    errorToast(message);
    setLoading(false);
    return;
    }          
}
await new Promise(resolve => setTimeout(resolve, 2000));
// Successful login
const responseData = await response.json();
// Store the token or user information in local storage or state
localStorage.setItem('token', responseData.auth_token);
const message = 'Login successful'
successToast(message.toUpperCase());
setLoading(false);
navigate("/");
} catch (error) {
const message = `Login error ${error.message}!`
errorToast(message);
setLoading(false);
console.log('Login successful:', error);
}


// ======================= LOGOUT =======================
const logoutApiUrl = 'http://127.0.0.1:8000/auth/logout/';
try {
    // Make a request to the logout endpoint
    const response = await fetch(logoutApiUrl, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${localStorage.getItem('token')}`,
    },
    });

    // Check if the logout was successful
    if (response.ok) {
    localStorage.removeItem('token');
    // localStorage.removeItem('user');

    navigate('/login');
    } else {
    // Handle logout failure
    const message = `Logout failed:, ${response.statusText}`
    successToast(message);
    }
} catch (error) {
    const message = `Error during logout: ${error}`
    successToast(message);
}