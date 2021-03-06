import { 
  BUDGET_GET,
  BUDGETED_CATEGORIES_GET,
  SET_SELECTED_PARENT_CATEGORY_ID,
  BUDGETED_TRANSACTION_ADD
} from 'data/constants';

import API from 'data/fetch';

export const fetchBudget = id => {
  const promise = API.budget.fetchBudget(id);

  return {
    type: BUDGET_GET,
    promise,
  };
}

export const fetchBudgetedCategories = id => {
  const promise = API.budget.fetchBudgetedCategories(id);
  
  return {
    type: BUDGETED_CATEGORIES_GET,
    promise,
  };
}

export const selectParentCategory = id => {
  return {
    type: SET_SELECTED_PARENT_CATEGORY_ID,
    payload: id,
  }
}

export const addTransaction = ({ budgetId, data }) => {
  const promise = API.budget.addTransaction({
    budgetId,
    data
  });

  return {
    type: BUDGETED_TRANSACTION_ADD,
    promise,
    successMessage: 'Transaction has been added!',
  }
}