import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAZUpNZeXGs4WdgF7w0uq7E9GSqwDMNMtY',
	authDomain: 'instagram-clone-6cde8.firebaseapp.com',
	projectId: 'instagram-clone-6cde8',
	storageBucket: 'instagram-clone-6cde8.appspot.com',
	messagingSenderId: '1064333643408',
	appId: '1:1064333643408:web:5b98e8abd255d3ef905215',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
