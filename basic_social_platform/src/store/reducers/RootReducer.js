import AuthReducer from './AuthReducer'
import ProjectReducer from './ProjectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore' // syncs firestore with the redux state
import { firebaseReducer } from 'react-redux-firebase'

const RootReducer = combineReducers({
    auth: AuthReducer,
    project: ProjectReducer,
    firestore: firestoreReducer, // this will sync our firebase store to redux
    firebase: firebaseReducer // this will sync our auth firebase to redux
})

export default RootReducer