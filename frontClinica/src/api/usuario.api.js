import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

let currentUser = false

const axiosApi = axios.create({
    baseURL: 'http://localhost:8000/usuario'
})

export const usuarioGet= async () => {
    return await axiosApi.get('/user/');
}

export const usuarioRegister = async (usuario) => {
  console.log(usuario);
   return  await axiosApi.post('/api/v1/usuario/', usuario)
  .then(response => {
    // handle success
    console.log(response);
  })
  .catch(error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
    console.log(error.config);
  }); 
  
}

export const submitLogin = async (username, password) => {

  return await axiosApi.post(
    "/login/",
    {
      username: username,
      password: password
    }
  ).then(function (res) {
    currentUser = true;
    return currentUser;
  });  
}

export const submitLogout= async () => {
  
  return await axiosApi.post(
    "/logout/",
    {withCredentials: true}
  ).then(function(res) {
    currentUser = false;
    return currentUser;
  });
}

