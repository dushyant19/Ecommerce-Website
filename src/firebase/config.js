import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyARfcPokJ-12icV6IgQZHESqRcPRDSfY0A",
    authDomain: "react-ecom-530c5.firebaseapp.com",
    projectId: "react-ecom-530c5",
    storageBucket: "react-ecom-530c5.appspot.com",
    messagingSenderId: "681384448217",
    appId: "1:681384448217:web:d3bdab77f2d57412eb2ec8",
    measurementId: "G-N74GNTMDEK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  var provider = new firebase.auth.GoogleAuthProvider();
  
  provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });


  const db = firebase.firestore()

  export const adduser = async (user,additionaldata)=>{
        const userref = await db.doc(`Users/${user.uid}`)      
        const {displayName,email} = user
        console.log('display name comes ',displayName,additionaldata)
        console.log(displayName,email)
        const usersnapshot = await userref.get()
        let createdAt = new Date()
        if(!(await usersnapshot).exists){
              try{
                    if(displayName){
                          console.log('Am i coming here')
                        await userref.set({
                              displayName,
                              email,
                              createdAt,
                              ...additionaldata
                        })
                    }
                    else{
                          console.log('If not then what is ther problem')
                          await userref.set({
                                displayName:additionaldata,
                                email,
                                createdAt,
                          })
                    }
              }
              catch(err){
                    console.log('error is adding user to database',err.message)
              }
        }
        return userref;
  }



  export const getuser = async ()=>{
        try {
              const querysnapshot = await db.collection('Users').doc('KGgzwOdNsMWd7CdCgNJ7').get()
              console.log(querysnapshot.exists)
        } catch (error) {
              console.log('error retrieving users')
        }
  }

  export const googleSignIn = async ()=>{
      try{
            const result = await firebase.auth().signInWithPopup(provider)
            console.log(result)
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            const authuser = result.user;
            // ...
      }
      catch(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
      }
  }