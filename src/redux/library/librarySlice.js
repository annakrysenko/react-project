import { createSlice } from '@reduxjs/toolkit';
import {
	userBooks,
	addBookToRead,
	addBookPlanning,
	getBookPlanning,
	addFinishedPages,
	addBookReview,
} from './libraryOperation';
import { logIn, logOut, loginWithGoogle } from '../auth/authOperation';

const initialState = {
	goingToRead: [],
	currentlyReading: [],
	finishedReading: [],
	startDate: null,
	endDate: null,
	pagesPerDay: null,
	stats: [],
	rating: null,

	error: null,
};

const librarySlice = createSlice({
	name: 'book',
	initialState,
	extraReducers: {
		[logIn.fulfilled](state, action) {
			state.goingToRead = action.payload.userData.goingToRead;
			state.currentlyReading = action.payload.userData.currentlyReading;
			state.finishedReading = action.payload.userData.finishedReading;
		},
		[userBooks.fulfilled](state, action) {
			state.goingToRead = action.payload.goingToRead;
			// state.currentlyReading = action.payload.currentlyReading;
			state.finishedReading = action.payload.finishedReading;
		},
		[logOut.fulfilled](state) {
			state.goingToRead = [];
			state.currentlyReading = [];
			state.finishedReading = [];
			state.startDate = null;
			state.endDate = null;
			state.stats = [];
			state.error = null;
		},
		[addBookToRead.fulfilled](state, action) {
			state.goingToRead.push(action.payload.newBook);
		},
		[addBookPlanning.fulfilled](state, action) {
			state.currentlyReading = action.payload.books;
			state.startDate = action.payload.startDate;
			state.endDate = action.payload.endDate;
			state.pagesPerDay = action.payload.pagesPerDay;
		},

		[getBookPlanning.fulfilled](state, action) {
			if (!action.payload) {
				return;
			}
			state.currentlyReading = action.payload.planning.books.filter(
				book => book.pagesTotal !== book.pagesFinished
			);

			state.startDate = action.payload.planning.startDate;
			state.endDate = action.payload.planning.endDate;
			state.stats = action.payload.planning.stats;
			state.pagesPerDay = action.payload.planning.pagesPerDay;
		},

		[addFinishedPages.fulfilled](state, action) {
			state.stats = action.payload.planning.stats;
			state.currentlyReading.splice(
				state.currentlyReading.findIndex(
					book => book._id === action.payload.book._id
				),
				1,
				action.payload.book
			);
		},

		[loginWithGoogle.fulfilled](state, action) {
			state.goingToRead = action.payload.data.goingToRead;
			state.currentlyReading = action.payload.data.currentlyReading;
			state.finishedReading = action.payload.data.finishedReading;
		},
		[addBookReview.fulfilled](state, action) {
			state.finishedReading.splice(
				state.finishedReading.findIndex(
					book => book._id === action.payload._id
				),
				1,
				action.payload
			);
		},
	},
});

export const libraryReducer = librarySlice.reducer;
