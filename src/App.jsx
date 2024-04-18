import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Dashboard from './components/layout/Dashboard';
import { useContext } from 'react';
import { UserContext } from './components/general/UserProvider';
import Users from './components/users/Users';
import PrivateRoute from './components/general/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute Component={Dashboard} />} />
      </Routes>
    </Router>
  );
}

export default App;
