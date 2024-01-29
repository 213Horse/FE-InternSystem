import { useSelector } from 'react-redux';
import { RootState } from './store';

// login
export const accessTokenSelector = useSelector((state: RootState) => state.LoginSlice.token);

//
export const internInfo = useSelector((state: RootState) => state.Approve.internInfo);
