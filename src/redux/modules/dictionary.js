// dictionary.js

// Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";
const DELETE = "dictionary/DELETE";

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
      title: "g2",
      text: "대충 인사하기",
      example: "g2g2",
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

export const deleteDictionary = (dictionary) => {
  return { type: DELETE, dictionary };
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // do reducer stuff
    case "dictionary/LOAD": {
      return state;
    }

    case "dictionary/CREATE": {
      const new_list = [...state.list, action.dictionary];
      return { list: new_list };
    }

    case "dictionary/DELETE": {
      const dictionary_list = state.list.filter((l, idx) => {
        if (idx !== action.dictionary) {
          return l;
        }
      });

      return { list: dictionary_list };
    }
    default:
      return state;
  }
}
