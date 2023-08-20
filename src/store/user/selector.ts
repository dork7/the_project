import { useSelector } from 'react-redux';

export const selectCurrentUser = () => useSelector((state: any) => state.user.currentUser)
