import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./redux/store/authSlice";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import ContactListApp from "./components/ContactListApp";
import AuthForm from "./components/Auth/AuthForm";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(authActions.setUserLogged({ email: user.email, uid: user.uid }));
      } else {
        dispatch(authActions.setUserLoggedOut());
      }
    });
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <>
      {isAuthenticated ? <ContactListApp /> : <AuthForm />}
    </>
  );
}

export default App;
