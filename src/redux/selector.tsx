import { useSelector } from 'react-redux';
import { RootState } from './store';

// login
export const accessTokenSelector = useSelector((state: any) => state.LoginSlice.token);
