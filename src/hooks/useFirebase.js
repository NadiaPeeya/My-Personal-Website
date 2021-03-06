import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword,  updateProfile,GoogleAuthProvider, signInWithPopup,} from "firebase/auth";
//initializing
initializeFirebase();

const useFirebase = () => {
 const [user, setUser] = useState({})
 const [isLoading, setIsLoading] = useState(true);
 const [authError, setAuthError] = useState('');
 const [admin, setAdmin] = useState(false);
 
 const auth = getAuth(); 
 const googleProvider = new GoogleAuthProvider();
 const registerUser = (email, password,name,  history) => {
          
    setIsLoading(true);
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        setAuthError('');
        const newUser = {email, displayName: name};
       
        setUser(newUser);
        //save user to the database
        saveUser(email, name, 'POST');

         //send name to firebase 
         updateProfile(auth.currentUser, {
            displayName: name, 
          }).then(() => {
          
          }).catch((error) => {
          });
        history.replace('/');
      })
      .catch((error) => {
        setAuthError(error.message);
     
      })
      .finally(()=> setIsLoading(false));
    
 }

 useEffect(()=> {
  fetch(`https://murmuring-meadow-96410.herokuapp.com/users/${user.email}`)
  .then(res => res.json())
  .then(data => setAdmin(data.admin))
}, [user.email])


 const saveUser = (email, displayName, method)=> {
    const user = {email, displayName};
    fetch('https://murmuring-meadow-96410.herokuapp.com/users', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then()
  }

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
   signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
       const destination = location?.state?.from || '/';
       history.replace(destination);
       setAuthError('');
   })
   .catch((error) => {
       setAuthError(error.message);
   })
   .finally(()=> setIsLoading(false));
}
const signInWithGoogle = (location, history) => {
  setIsLoading(true);
  signInWithPopup(auth, googleProvider)
  .then((result) => {
 
    const user = result.user;
    saveUser(user.email, user.displayName, 'PUT');
    setAuthError('');
    history.replace('/dashboard')
 
  }).catch((error) => {
      setAuthError(error.message);
  })
  .finally(()=> setIsLoading(false));
}

  //observing user's state
  useEffect(() => {
    const unsubscribe  = onAuthStateChanged(auth, (user) => {
               if (user) {
                 setUser(user);
                 
               } else {
                setUser({})
               }
               setIsLoading(false);
             });
             return () => unsubscribe
        }, [auth])

  const logOut = () => {
    setIsLoading(true);
   signOut(auth).then(() => {
      
     }).catch((error) => {
    
     })
     .finally(()=> setIsLoading(false))
     
}
 return {
     user,
     registerUser,
     isLoading,
     authError,
     logOut,
     loginUser,
     admin,
     signInWithGoogle,

 }
}

export default useFirebase;