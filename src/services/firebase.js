import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID"
};

let app, analytics, db;

try {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  db = getFirestore(app);
} catch (e) {
  console.warn("Firebase not configured properly.");
}

// Called on every page navigation
export function trackPageView(pageName) {
  if (analytics) logEvent(analytics, 'page_view', { page_name: pageName })
}

// Called on every chat send
export function trackChatQuestion(text) {
  if (analytics) logEvent(analytics, 'chat_question', { question_length: text.length })
}

// Called on every chat send — saves to Firestore
export async function saveChatLog(question) {
  if (!db) return
  await addDoc(collection(db, 'chat_logs'), {
    question: question.slice(0, 500),
    timestamp: serverTimestamp(),
  })
}

export { analytics, db };
