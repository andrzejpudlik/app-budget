import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button, LoadingIndicator, Navigation, Wrapper } from 'components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import theme from 'utils/theme';
import Budget from 'pages/Budget';

import { GlobalStyles }  from './index.css';

function App({ budget, fetchBudget, fetchBudgetedCategories }) {



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
            <Route exact path="/">
              Home page
            </Route> 
            <Route path="/budget">
              <Budget />
            </Route>
          </Switch>
        </Wrapper>
      </Router>
    </React.Fragment>

  );
}


function RootApp() {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<LoadingIndicator />}>
        <App />
      </React.Suspense>
    </ThemeProvider>
  )
}

export default RootApp;
