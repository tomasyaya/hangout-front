import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  async signup(user) {
    const { username, password } = user;
    try {
      const { data } = await this.auth.post('/auth/signup', {username, password});
      console.log(data)
      return data
    }
    catch(err) {
      console.log(err)
    }
  }

  async login(user) {
    const { username, password } = user;
    try {
      const { data } = await this.auth.post('/auth/login', {username, password});
      return data
    }
    catch(err) {
      console.log(err)
    }
  }

  async logout() {
    try {
      const { data } = await this.auth.post('/auth/logout', {});
      return data
    }
    catch(err) {
      console.log(err)
    }
  }

  async me() {
    try {
      const { data } = await this.auth.get('/auth/me');
      return data
    }
    catch(err) {
      console.log(err)
    }
  }
}

const authService = new AuthService();

export default authService;
