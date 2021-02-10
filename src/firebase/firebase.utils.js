import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDSET_WcWl3g4EK0g4TtDB39Xt8u9rojAE',
  authDomain: 'invogue-c591a.firebaseapp.com',
  projectId: 'invogue-c591a',
  storageBucket: 'invogue-c591a.appspot.com',
  messagingSenderId: '221594910589',
  appId: '1:221594910589:web:8b102f457e8cc3668bd614',
  measurementId: 'G-FSP944RC55',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
