import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCghImkzEPlDNPUuHXeUFwIjzQ-JXfEmSg",
  authDomain: "zoya-reviews.firebaseapp.com",
  projectId: "zoya-reviews",
  storageBucket: "zoya-reviews.firebasestorage.app",
  messagingSenderId: "51963301145",
  appId: "1:51963301145:web:e7af412ee034334e070988",
  measurementId: "G-8B3VCN2J4D"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);