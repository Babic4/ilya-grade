import { writable } from 'svelte/store'
import { initializeApp } from 'firebase/app'

import {
	getFirestore,
	collection,
	addDoc,
	query,
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
const reviewsQuery = query(reviewsCollection, orderBy('time', 'desc'))

export function useReviews() {
	const reviews = writable<any[]>([])

	const unsubscribe = onSnapshot(reviewsQuery, snapshot => {
		const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
		reviews.set(data)
	})

	const addReview = (data: {
		name: string
		message: string
		rating: number
	}) => {
		addDoc(reviewsCollection, {
			...data,
			time: serverTimestamp(),
		})
	}

	return { reviews, addReview, unsubscribe }
}
