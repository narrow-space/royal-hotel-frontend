import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initilizeAuthentication from "../Components/Firebase/Firebase.init";
initilizeAuthentication()
const Usefirebase = () => {
    const [user, setUser] = useState({})
    const [isloading,setIsloading]=useState(true)
    const auth = getAuth();
    const Googleprovider = new GoogleAuthProvider();


    const googleSignIn = () => {
        return signInWithPopup(auth, Googleprovider)

       
           


    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsloading(false)

        });
        return () => unsubscribed
    }, [])

    const logOut = () => {


        signOut(auth)
            .then(() => { })

    }

    return {
        user,
        googleSignIn,
        logOut,
        setUser,
        isloading,
        setIsloading
    }

}
export default Usefirebase;