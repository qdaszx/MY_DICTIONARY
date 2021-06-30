import React from "react";
import styled from "styled-components";

// 함수형 컴포넌트는 훅을 이용해서 리덕스를 쓴다
import { useSelector, useDispatch } from "react-redux";
const Dictionary = (props) => {
  const dictionary_list = useSelector((state) => state.dictionary.list);
  console.log(props); // history 찍히는가

  return (
    <ListStyle>
      {dictionary_list.map((list, index) => {
        console.log(list);
        return (
          <div
            onClick={() => {
              props.history.push("/detail/" + index);
            }}
          >
            <ItemStyle key={index}>
              <Fix>단어 : </Fix>
              {list.title}
            </ItemStyle>
            <ItemStyle key={index}>
              <Fix>설명 : </Fix>
              {list.text}
            </ItemStyle>
            <ItemStyle key={index}>
              <Fix>예시 : </Fix>
              {list.example}
            </ItemStyle>
            <Line />
          </div>
        );
      })}
    </ListStyle>
  );
};

const Line = styled.hr`
  border: 1px solid #ffdfde;
  padding: 10px;
  background-color: #ffdfde;
  margin: 0;
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

const ItemStyle = styled.div`
  padding: 16px;
  margin: 2px;
  background-color: #a7bcecd2;
`;

export default Dictionary;
