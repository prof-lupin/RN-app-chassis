// create axios instances to make calls to the login endpoint

import axios from 'axios';

export const otpAuth = axios.create({
    baseURL: 'https://localhost:8443/api/auth/otp'
});

// export const validateOtp = axios.create({
//     baseURL: 'https://localhost:8443/api/auth/otp/validate'
// });