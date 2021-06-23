import React, { useContext, createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import fire from './fire';
import LoginPage from './pages/Login';
import Hero from './pages/Hero';
import MyCoursesPage from './pages/MyCourses';
import './App.css';

const AuthContext = createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser('');
    }
  });
  return {
    user,
  };
}

function PrivateRoute({ children, ...rest }) {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

const App = () => {
  const auth = useAuth();

  return (
    <div className="App">
      <ProvideAuth>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact={true}>
              <Hero />
            </PrivateRoute>
            <PrivateRoute path="/my-courses" exact={true}>
              <MyCoursesPage />
            </PrivateRoute>
            <Route path="/login" exact={true}>
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );
};

export default App;
