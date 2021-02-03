import { toast } from 'react-toastify';

export default function notificationsMiddleware() {
  return function(next) {
    return function(action) {

      if(action.successMessage && /(.*)(_SUCCESS)/.test(action.type)) {
        toast.success(action.successMessage);
      }

      next(action);
    }
  }
}