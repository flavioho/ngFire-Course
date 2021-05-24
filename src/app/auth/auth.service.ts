import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

// import firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";

import { Observable } from "rxjs";
// import { switchMap } from "rxjs/operators";

interface User {
    uid: string;
    email: string;
    photoURL?: string;
    displayName?: string;
}

@Injectable({
    providedIn: "root",
})
export class AuthService {
    user: Observable<User>;

    authState: any = null;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router,
    ) {
        // this.user = this.afAuth.authState.pipe(
        //     switchMap((user) => {
        //         if (user) {
        //             return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        //         }
        //         return of(null);
        //     }),
        // );
        // this.afAuth.authState.subscribe((data) => (this.authState = data));
    }

    // emailSignIn(email: string, password: string) {
    //     return this.afAuth
    //         .signInWithEmailAndPassword(email, password)
    //         .then(() => console.log("You have successfully signed in"))
    //         .catch((error) => console.log(error.message));
    // }

    // emailSignUp(email: string, password: string) {
    //     return (
    //         this.afAuth
    //             .createUserWithEmailAndPassword(email, password)
    //             .then((user) => this.updateUserData(user))
    //             .then(() => console.log("Welcome, your account has been created!"))
    //             // .then(user => {
    //             //     this.afAuth.auth.currentUser
    //             //         .sendEmailVerification()
    //             //         .then(() => console.log("We sent you an email verification"))
    //             //         .catch(error => console.log(error.message));
    //             // })
    //             .catch((error) => console.log(error.message))
    //     );
    // }

    // resetPassword(email: string) {
    //     return firebase
    //         .auth()
    //         .sendPasswordResetEmail(email)
    //         .then(() => console.log("We've sent you a password reset link"))
    //         .catch((error) => console.log(error.message));
    // }

    // signOut() {
    //     return this.afAuth.signOut().then(() => {
    //         this.router.navigate(["/"]);
    //     });
    // }

    // googleLogin() {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     return this.socialLogin(provider);
    // }

    // githubLogin() {
    //     const provider = new firebase.auth.GithubAuthProvider();
    //     return this.socialLogin(provider);
    // }

    // facebookLogin() {
    //     const provider = new firebase.auth.FacebookAuthProvider();
    //     return this.socialLogin(provider);
    // }

    // twitterLogin() {
    //     const provider = new firebase.auth.TwitterAuthProvider();
    //     return this.socialLogin(provider);
    // }

    // private socialLogin(provider) {
    //     return this.afAuth
    //         .signInWithPopup(provider)
    //         .then((credential) => {
    //             this.updateUserData(credential.user);
    //         })
    //         .catch((error) => console.log(error.message));
    // }

    // private updateUserData(user) {
    //     const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    //     const data: User = {
    //         uid: user.uid,
    //         email: user.email || null,
    //         displayName: user.displayName,
    //         photoURL: user.photoURL || `https://www.gravatar.com/avatar/${user.uid}`,
    //     };
    //     return userRef.set(data, { merge: true });
    // }
}
