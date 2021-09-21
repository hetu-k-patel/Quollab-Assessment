import axios from 'axios';

const LoginService = (data) =>
   axios.post('http://localhost:4000/user/login', data).then((res) => res.status);

export default LoginService;
