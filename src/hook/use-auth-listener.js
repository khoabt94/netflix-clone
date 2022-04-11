import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useAuthListener() {
  const [user, setUser] = useState(() => {
    const authUser = JSON.parse(localStorage.getItem("authUser"));
    const temp = authUser?.providerData;
    return temp;
  });

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        const temp = authUser.providerData[0];
        localStorage.setItem("authUser", JSON.stringify(temp));
        setUser(temp);
      } else {
        localStorage.removeItem("authUser");
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return { user };
}
