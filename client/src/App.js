import React from 'react';
// import {  Router, Routes, Route } from 'react-router-dom';
// import {
// //   ApolloClient,
// //   InMemoryCache,
// //   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';



import Home from './pages/Home';
import './index.css';
// import Eventform from './pages/Eventform';
// import Login from './pages/Login';
// import EventPage from './pages/EventPage';
// import Rsvp from './pages/Rsvp';
// import Signup from './pages/Signup';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// **left out for test render 5.24.22 by samm 
// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    // <ApolloProvider client={client}>
    //   <Router>
    //     <div className="">
    //       <Header />
    //       <div className="">
    //         <Routes>
    //           <Route 
    //             path="/" 
    //             element={<Home />} 
    //           />
         
    //             <Route
    //                 path= "/event"
    //                 element={<EventPage />}
    //             />
    //           <Route 
    //             path="*" 
    //             element={<NoMatch />} 
    //           />
    //         </Routes>
    //       </div>
    //       <Footer />
    //     </div>
    //   </Router>
    // </ApolloProvider>
    <div className='App'>
    <Home/>
    </div>
  );
}

export default App;
