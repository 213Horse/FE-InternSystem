import { useSelector } from 'react-redux';
import { RootState } from './store';

// login
export const accessTokenSelector = useSelector((state: RootState) => state.LoginSlice.token);

//
export const internInfoSlice = useSelector((state: RootState) => state.approve.data);

// Group zalo
export const GroupZaloSlice = useSelector((state: RootState) => state.group.data);
