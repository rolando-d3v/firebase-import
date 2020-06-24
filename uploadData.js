const firestoreService = require("firestore-export-import");
const serviceAccount = require("./serviceAccountKey.json");

const databaseURL = "https://react-firebase-bfa03.firebaseio.com";

firestoreService.initializeApp(serviceAccount, databaseURL);

firestoreService.restore("data.json");
