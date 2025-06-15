import { initializeApp } from 'firebase/app'

import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	query,
	where,
	orderBy,
	onSnapshot,
	serverTimestamp,
} from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCTYwWvOsCHreCaXDPsf3wu36xq2XRc9K4',
	authDomain: 'ilya-grade.firebaseapp.com',
	projectId: 'ilya-grade',
	storageBucket: 'ilya-grade.firebasestorage.app',
	messagingSenderId: '140438573170',
	appId: '1:140438573170:web:3beec2a728e9a153b2f2eb',
	measurementId: 'G-EYDSMHEZ8S',
}

const firebase = initializeApp(firebaseConfig)

const db = getFirestore(firebase)

const reviewsCollection = collection(db, 'reviews')
const reviewsQuery = query(reviewsCollection)

export function useReviews() {
	const getReviews = async () => {
		return await getDocs(reviewsQuery)
	}

	const addReview = (data: {
		name: string
		message: string
		rating: number
	}) => {
		addDoc(reviewsCollection, {
			...data,
			time: new Date(),
		})
	}

	return { getReviews, addReview }
}
