import { LoginFormValues } from '../../containers/Login/login.types';
import { api } from '../api';
const login = async (data: LoginFormValues) => await api.post('/login', data);

export { login };
