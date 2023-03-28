import { AUTH } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signin = (formData, history) => (dispatch) => {
    try {
        // sign in user
        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => (dispatch) => {
    try {
        // signup user
        history.push('/');
    } catch (error) {
        console.log(error);
    }
};