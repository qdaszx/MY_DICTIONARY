import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteDictionaryFB } from "./redux/modules/dictionary";
import styled from "styled-components";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import SvgIcon from "@material-ui/core/SvgIcon";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

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
      <ButtonGroup>
        <IconButton
          style={{ color: "red" }}
          onClick={() => {
            dispatch(deleteDictionaryFB(dictionary_index));
            props.history.push("/");
          }}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton
          style={{ color: "blue" }}
          onClick={() => {
            props.history.push("/");
          }}
        >
          <HomeIcon style={{ color: "blue" }} />
        </IconButton>
      </ButtonGroup>
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

export default Detail;
