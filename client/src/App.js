import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import Home from './pages/Home';
import EventPage from './pages/EventPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import MeetTeam from './pages/MeetTeam';


import './index.css';
import EventFormPage from './pages/EventFormPage';
import HomePageUser from './pages/HomePageUser';
import UserProfile from './pages/UserProfile';

import Auth from './utils/auth'
import EventUpdatePage from './pages/EventUpdatePage';



// import Rsvp from './pages/Rsvp';


const httpLink = createHttpLink({
  uri: '/graphql',
});

// **left out for test render 5.24.22 by samm 
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  function authHome () {
    if(Auth.loggedIn()) {
      return(
        <Route
          path="/"
          element={<HomePageUser />}
        />
      );
    } else {
      return(
        <Route
          path="/"
          element={<Home/>}
        />
      );
    }
  }
  return (
    <>

      <ApolloProvider client={client}>
        <Router>
          <div className="">
            <Routes>
              {authHome()}
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
              />
              <Route
                path="/EventFormPage"
                element={<EventFormPage />}
              />
              <Route
                path="/username/:username"
                element={<UserProfile />}
              />
              <Route
                path="/event/:id"
                element={<EventPage />}
              />
              <Route
                path='/event/update/:id'
                element={<EventUpdatePage/>}
              />
              <Route
                path='/contributors/team'
                element={<MeetTeam/>}
              />
              <Route
                path="*"
                element={<NoMatch />}
              />
            </Routes>
          </div>
        </Router>
      </ApolloProvider>

    </>
  );
}

export default App;
