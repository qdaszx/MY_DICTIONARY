// dictionary.js

// Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";

// initialState (초기값)
const initialState = {
  list: [
    {
      id: "list_0",
      title: "정ㅋ벅ㅋ",
      text: "정복하다",
      example: "리액트 정ㅋ벅ㅋ",
    },
    {
      id: "list_1",
      title: "정ㅋ벅ㅋ",
      text: "정복하다",
      example: "리액트 정ㅋ벅ㅋ",
    },
  ],
};

// Action Creators
export const loadDictionary = (dictionary) => {
  return { type: LOAD, dictionary };
};

export const createDictionary = (dictionary) => {
  return { type: CREATE, dictionary };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "dictionary/LOAD": {
      return state;
    }

    case "dictionary/CREATE": {
      const new_list = [...state.list, action.dictionary];
      return { list: new_list };
    }
    default:
      return state;
  }
}
