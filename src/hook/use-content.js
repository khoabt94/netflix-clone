import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((content) => {
        const allContent = content.docs.map((el) => ({
          ...el.data(),
          docId: el.id,
        }));
        setContent(allContent);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return { [target]: content };
}
