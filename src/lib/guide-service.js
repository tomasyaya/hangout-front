import axios from 'axios';

class GuideService {
  constructor() {
    this.guide = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true
    })
  }

  async createGuide(body){
    try {
      const { data } = this.guide.post('/guides', body);
      return data
    }
    catch(err) {
      console.log(err)
    }
  }
}

const guideService = new GuideService();
export default guideService;