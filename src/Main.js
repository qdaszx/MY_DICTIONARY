import React from "react";
import styled from "styled-components";

const Dictionary = (props) => {
  const my_list = props.list;
  console.log(props); // history 찍히는가

  return (
    <ListStyle>
      {my_list.map((list, index) => {
        console.log(list);
        return (
          <div
            onClick={() => {
              props.history.push("/detail");
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
