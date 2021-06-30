import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteDictionary } from "./redux/modules/dictionary";
import styled from "styled-components";

const Detail = (props) => {
  const dispatch = useDispatch();

  const dictionary_list = useSelector((state) => state.dictionary.list);
  console.log(dictionary_list, props);
  console.log(dictionary_list[0]);
  let dictionary_index = parseInt(props.match.params.index);

  return (
    <div>
      <ItemStyle>
        <Fix>단어 : </Fix> {dictionary_list[dictionary_index].title}
      </ItemStyle>
      <ItemStyle>
        <Fix>설명 : </Fix> {dictionary_list[dictionary_index].text}
      </ItemStyle>
      <ItemStyle>
        <Fix>예시 : </Fix> {dictionary_list[dictionary_index].example}
      </ItemStyle>
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

const ItemStyle = styled.div`
  font-weight: 600;
  padding: 16px;
  margin: 2px;
  background-color: #a7bcecd2;
`;

const Fix = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #ffdfde;
  margin: 0 4px 0 0;
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #fff;
`;

export default Detail;
