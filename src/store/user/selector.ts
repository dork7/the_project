import { useSelector } from 'react-redux';

export const selectCurrentUser = () => useSelector(state => state.user.currentUser)
