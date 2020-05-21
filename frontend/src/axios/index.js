import axios from 'axios';

const API_URL = 'http://localhost:3000';

const securedAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

const plainAxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

securedAxiosInstance.interceptors.request.use((config) => {
  const method = config.method.toUpperCase();

  if (method !== 'OPTIONS' && method !== 'GET') {
    /* eslint-disable no-param-reassign */
    config.headers = {
      ...config.headers,
      'X-CSRF-TOKEN': localStorage.csrf,
    };
  }
  return config;
});

securedAxiosInstance.interceptors.response.use(null, (error) => {
  if (error.response && error.response.config && error.response.status === 401) {
    // If 401 by expired access cookie, we do refresh request
    return plainAxiosInstance.post('/refresh', {}, { headers: { 'X-CSRF-TOKEN': localStorage.csrf } })
      .then((response) => {
        localStorage.csrf = response.data.csrf;
        localStorage.signedIn = true;

        // After another successfull refresh - repeat original request
        const retryConfig = error.response.config;
        retryConfig.headers['X-CSRF-TOKEN'] = localStorage.csrf;
        return plainAxiosInstance.request(retryConfig);
      }).catch((errorRefresh) => {
        delete localStorage.csrf;
        delete localStorage.signedIn;

        // Redirect to root if refresh fails
        window.location.replace('/');

        return Promise.reject(errorRefresh);
      });
  }

  return Promise.reject(error);
});

export { securedAxiosInstance, plainAxiosInstance };
