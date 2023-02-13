importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
    apiKey: "AIzaSyCMucxX2bBfuRKj9UUEfoqZZG-2gabSLwQ",
    authDomain: "pushnotifyc-h.firebaseapp.com",
    projectId: "pushnotifyc-h",
    storageBucket: "pushnotifyc-h.appspot.com",
    messagingSenderId: "405777104866",
    appId: "1:405777104866:web:cd418504dbec8b26ef83bb",
    measurementId: "G-95CBEEN88H"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();