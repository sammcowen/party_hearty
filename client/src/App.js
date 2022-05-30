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


import './index.css';
import EventFormPage from './pages/EventFormPage';
import HomePageUser from './pages/HomePageUser';



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
  return (
    <>

      <ApolloProvider client={client}>
        <Router>
          <div className="">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
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
              path="/HomePageUser"
              element={<HomePageUser/>}
              />
              <Route
                path="/event/:id"
                element={<EventPage />}
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
