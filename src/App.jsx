import React, { useContext, useState } from 'react';
import Login from './components/Auth/Login';
import EmplloyeeDashboard from './components/Dashboard/EmplloyeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  const loginHandler = (username, password) => {
    if (username === 'sam' && password === '123') {
      setUser('admin');
    } else if (authData.employees.find((e) => username === e.username && password === e.password)) {
      setUser('employee');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      {user === null ? (
        <Login loginHandler={loginHandler} />
      ) : user === 'admin' ? (
        <AdminDashboard />
      ) : user === 'employee' ? (
        <EmplloyeeDashboard />
      ) : (
        ''
      )}
    </>
  );
};

export default App;
