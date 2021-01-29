import {
  ALL_CATEGORIES_GET, 
} from 'data/constants';
  
import API from 'data/fetch';
  
export const fetchAllCategories = id => {
  const promise = API.common.fetchAllCategories(id);
  
  return {
    type: ALL_CATEGORIES_GET,
    promise,
  };
}