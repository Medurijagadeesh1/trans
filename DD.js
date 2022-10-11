const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_XsXnSBYqja7QSWOBM81cPQfko5pwVNw",
    authDomain: "my-latest-project-a2e8e.firebaseapp.com",
    databaseURL: "https://my-latest-project-a2e8e-default-rtdb.firebaseio.com",
    projectId: "my-latest-project-a2e8e",
    storageBucket: "my-latest-project-a2e8e.appspot.com",
    messagingSenderId: "509735003046",
    appId: "1:509735003046:web:725a63d9f5e69db6caa567"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email,password)
    //firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
         .then((result) => {
    // Signed in 
    document.write(" youre signed up")
    console.log(result)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.href = "./index.html"
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}