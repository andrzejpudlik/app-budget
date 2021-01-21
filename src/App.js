import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LoadingIndicator, Navigation, Wrapper } from 'components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import theme from 'utils/theme';

import { GlobalStyles }  from './index.css';

function App() {
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
            <button onClick={() => i18n.changeLanguage('pl')}>PL</button>
            <button onClick={() => i18n.changeLanguage('en')}>EN</button>
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
