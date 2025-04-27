import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmplloyeeDashboard from './components/Dashboard/EmplloyeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import { setlocalstorage } from './utils/localStorage';

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    setlocalstorage();
   if(authData){
    const loggedInUser = localStorage.getItem('loggedInUser');
     if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
     }
   }
  }, [authData])
  



  const loginHandler = (username, password) => {
    if (username === 'sam' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin'}));
    } else if (authData) {
      const employee = authData.employees.find((e) => username === e.username && password === e.password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' , data : employee }));
      }
    } else {
      alert('Invalid credentials');
    }
  };


  return (
    <>
      {user === null ? (
        <Login loginHandler={loginHandler} />
      ) : user === 'admin' ? (
        <AdminDashboard  />
      ) : user === 'employee' ? (
        <EmplloyeeDashboard data={loggedInUserData} />
      ) : (
        ''
      )}
    </>
  );
};

export default App;
