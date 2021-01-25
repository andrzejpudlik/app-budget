import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, LoadingIndicator, Navigation, Wrapper } from 'components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { fetchBudget, fetchBudgetedCategories } from 'data/actions/budget.actions';
import theme from 'utils/theme';

import { GlobalStyles }  from './index.css';

function App({ budget, fetchBudget, fetchBudgetedCategories }) {

  useEffect(() => {
    fetchBudget(1);
    fetchBudgetedCategories(1);
  }, [fetchBudget, fetchBudgetedCategories]);

  const { i18n } = useTranslation();

  return (
    <React.Fragment>
      <GlobalStyles />
      <Router>
        <Navigation items={[
          { content: 'Home', to: '/' },
          { content: 'Budget', to: '/budget' },
        ]}
        RightElement={(
          <div>
            <Button onClick={() => i18n.changeLanguage('pl')}>PL</Button>
            <Button onClick={() => i18n.changeLanguage('en')}>EN</Button>
          </div>
        )}
        />
        <Wrapper>
          <Switch>
            <Route path="/budget">Budget page</Route>
            <Route exact path="/">Home page</Route> 
          </Switch>
        </Wrapper>
      </Router>
    </React.Fragment>

  );
}

const ConnectedApp = connect(state => {
  return {
    budget: state.budget.budget
  }
}, {
    fetchBudget,
    fetchBudgetedCategories,
})(App);

function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <ConnectedApp />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
