import axios from '../_helpers/axios';

export const userService = {
    login,
    logout,
    register,
    handleResponse
};

function login(userNameOrEmail, password) {

    return axios.post("/login", { userNameOrEmail: userNameOrEmail, password: password })
        .then(handleResponse).catch(error => handleResponse(error.response))
        .then(response => {
            console.log(response);
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(response));
            console.log(response.username);
            return response.username;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    return axios.post("/register", user).then(handleResponse).catch(error => handleResponse(error.response));

}

function handleResponse(response) {
    console.log(response);
    const data = response.data;
    if (!data.ok) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            logout();
            window.location.reload(true);
        }

        const error = data.message;
        console.log("ERROR: ", error);
        return Promise.reject(error);
    }

    return data.data;
}