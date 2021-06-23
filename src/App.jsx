/* eslint-disable react/prop-types */
import React, { useContext, createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import firebase from './services/firebase';
import LoginPage from './pages/Login';
import Hero from './pages/Hero';
import MyCoursesPage from './pages/MyCourses';
import './App.css';

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged((userData) => setUser(userData));
  return {
    user,
  };
}


function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
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

const App = () => (
    <div className="App">
      <ProvideAuth>
        <Router>
          <Switch>
            <PrivateRoute path="/" exact>
              <Hero />
            </PrivateRoute>
            <PrivateRoute path="/my-courses" exact>
              <MyCoursesPage />
            </PrivateRoute>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
          </Switch>
        </Router>
      </ProvideAuth>
    </div>
  );

export default App;
