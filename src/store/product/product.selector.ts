import { useSelector } from 'react-redux';

export const getProductSelector = () => useSelector(state => state.products)