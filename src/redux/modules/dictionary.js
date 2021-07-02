// dictionary.js

import { firestore } from "../../firebase";

const dictionary_db = firestore.collection("dictionary");

// Actions
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";
const DELETE = "dictionary/DELETE";

const LOADED = "dictionary/LOADED";

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
  is_loaded: false,
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

export const isLoaded = (loaded) => {
  return { type: LOADED, loaded };
};

// 파이어베이스라 통신하는 함수들
export const loadDictionaryFB = () => {
  return function (dispatch) {
    dictionary_db.get().then((docs) => {
      let dictionary_data = [];
      docs.forEach((doc) => {
        if (doc.exists) {
          dictionary_data = [...dictionary_data, { id: doc.id, ...doc.data() }];
        }
      });

      console.log(dictionary_data);
      dispatch(loadDictionary(dictionary_data));
    });
  };
};

export const addDictionaryFB = (dictionary) => {
  return function (dispatch) {
    let dictionary_data = {
      title: dictionary.title,
      text: dictionary.text,
      example: dictionary.example,
    };

    dispatch(isLoaded(false));

    dictionary_db.add(dictionary_data).then((docRef) => {
      dictionary_data = { ...dictionary_data, id: docRef.id };
      dispatch(createDictionary(dictionary_data));
      dispatch(isLoaded(true));
    });
  };
};

export const deleteDictionaryFB = (dictionary) => {
  return function (dispatch, getState) {
    const _dictionary_data = getState().dictionary.list[dictionary];
    dispatch(isLoaded(false));
    if (!_dictionary_data.id) {
      return;
    }

    dictionary_db
      .doc(_dictionary_data.id)
      .delete()
      .then((docRef) => {
        dispatch(deleteDictionary(dictionary));
        dispatch(isLoaded(true));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "dictionary/LOAD": {
      if (action.dictionary.length > 0) {
        return { list: action.dictionary, is_loaded: true };
      }

      return { state, is_loaded: true };
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

    case "dictionary/LOADED": {
      return { ...state, is_loaded: action.loaded };
    }

    default:
      return state;
  }
}
