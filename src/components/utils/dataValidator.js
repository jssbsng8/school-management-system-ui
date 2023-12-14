
export const registrationValidator = (data) => {
    if (data['firstName'].length < 3) {
        const [message, status] = ['First name must be greater than 2 characters', 'error']
        return [message, status]
    }

    if (data['lastName'].length < 3) {
        const [message, status] = ['Last name must be greater than 2 characters', 'error']
        return [message, status]
    }
    if (!data['email'] || !isValidEmail(data['email'])) {
        const [message, status] = ['Invalid email address', 'error']
        return [message, status]
    }

    if (data['username'].length <= 3) {
        const [message, status] = ['Username must be greater than 3 characters', 'warning']
        return [message, status]
    }

    if (!data['role'] || data['role'].length === 0) {
        const [message, status] = ['Roles must be provided', 'error']
        return [message, status]
    } else {
        const validRoles = ['Admin', 'Teacher', 'Student'];
        // const invalidRoles = data['role'].filter(role => !validRoles.includes(role));

        if (!validRoles.includes(data['role'])) {
            const [message, status] = ['Invalid roles selected', 'error']
            return [message, status]
        }
    }
    if (!data['gender'] || data['gender'].length === 0) {
        const [message, status] = ['Gender must be provided', 'error']
        return [message, status]
    } else {
        const validGender = ['Male', 'Female', 'Other'];

        if (!validGender.includes(data['gender'])) {
            const [message, status] = ['Invalid gender selected', 'error']
            return [message, status]
        }
    }

    if (data['password'] !== data['confirmPassword']){
        const [message, status] = ['Password do not match', 'error']
        return [message, status]
    }
    
    if (data['password'].length < 8) {
        const [message, status] = ['Password must be at least 8 characters long', 'error']
        return [message, status]
    }


    return true;
}

const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return emailRegex.test(email);
};

export const loginDataValidator = (data) => {
    if (data['username'].length === 0 || data['username'].length < 3) {
        const [message, status] = ['Invalid Username', 'error']
        return [message, status]
    }

    if (data['password'].length < 8) {
        const [message, status] = ['Password must be greater than 8 characters', 'error']
        return [message, status]
    }

    return true
}