import React, { createContext, useEffect, useState } from 'react';
import { getlocalstorage, setlocalstorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const { employees, admins } = getlocalstorage();
    setUserData({ employees, admins });
  }, []);

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
