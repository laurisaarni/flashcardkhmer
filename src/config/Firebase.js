import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyD0V5WWJO4aDBPM2Y0A5rD-2jaBVSZkl6o',
  authDomain: 'flashcardskhmer.firebaseapp.com',
  databaseURL: 'https://flashcardskhmer.firebaseio.com',
  projectId: 'flashcardskhmer',
  storageBucket: '',
  messagingSenderId: '33328578349'
}

export default firebase.initializeApp(config)
