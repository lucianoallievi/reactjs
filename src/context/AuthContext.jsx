import { createContext, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: null,
    logged: false,
  });

  console.log(user);

  const login = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password).catch((e) =>
      console.log(e)
    );
  };
  const register = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password).catch(
      (err) => {
        console.log(err);
      }
    );
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user
        ? setUser({ email: user.email, logged: true })
        : setUser({ email: "", logged: false });
    });
  }, []);

  const logout = () => {
    signOut(auth);
    // setUser({ email: null, logged: false });
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    });
  };

  return (
    <div>
      <AuthContext.Provider
        value={{ user, login, register, logout, loginWithGoogle }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
};
