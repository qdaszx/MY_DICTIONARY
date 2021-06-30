import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteDictionary } from "./redux/modules/dictionary";

const Detail = (props) => {
  const dispatch = useDispatch();

  const dictionary_list = useSelector((state) => state.dictionary.list);
  console.log(dictionary_list, props);
  console.log(dictionary_list[0]);
  let dictionary_index = parseInt(props.match.params.index);

  return (
    <div>
      <h1>{dictionary_list[dictionary_index].title}</h1>
      <h1>{dictionary_list[dictionary_index].text}</h1>
      <h1>{dictionary_list[dictionary_index].example}</h1>
      <button
        onClick={() => {
          dispatch(deleteDictionary(dictionary_index));
          props.history.push("/");
        }}
      >
        삭제하기
      </button>
      <button
        onClick={() => {
          props.history.push("/");
        }}
      >
        홈으로가기
      </button>
    </div>
  );
};

export default Detail;
