// //

// src/App.js

// src/App.js

// import React, { useEffect } from 'react';
// import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Home from './components/Home'; // Assuming Home.js exists
// import { AuthProvider, useAuth, AuthContext } from './context/AuthContext'; // Correct import for AuthProvider and useAuth

// function App() {
//   const { user, login, logout } = useAuth();  // Access user context
  
//   useEffect(() => {
//     if (!user) {
//       login({ name: "John Doe" });  // Example of setting a user
//     }
//   }, [user, login]);

//   return (
//     <Router>
//       <div className="App">
//         <h1>Todo Application</h1>
//         {user ? (
//           <div>
//             <p>Welcome, {user.name}</p>
//             <button onClick={logout}>Logout</button>
//           </div>
//         ) : (
//           <p>Please login</p>
//         )}

//         <Routes>
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default () => (
//   <AuthProvider>
//     <App />
//   </AuthProvider>
// );

import React, { useContext, useEffect } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header'; // Path to Header component
import Home from './components/Home'; // Path to Home page
import Login from './components/Login'; // Path to Login page
import Register from './components/Register'; // Path to Register page
import TaskList from './components/TaskList'; // Path to TaskList component
import { AuthContext } from './context/AuthContext'; // Path to AuthContext

function App() {
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    // Fetch user data or check session status when app loads
    // You can make an API call here to check if the user is authenticated
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
            
            {/* Protected routes */}
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            <Route path="/tasks" element={user ? <TaskList /> : <Navigate to="/login" />} />
            
            {/* Catch-all route for unknown paths */}
            <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


