import React from "react";
import styled, { keyframes } from "styled-components";

import Dictionary from "./Main";
import Detail from "./Detail";
import NotFound from "./NotFound";
import Spinner from "./Spinner";

import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux"; // 커넥트함수
import {
  loadDictionary,
  createDictionary,
  loadDictionaryFB,
  addDictionaryFB,
} from "./redux/modules/dictionary"; // 액션함수

import { firestore } from "./firebase";

import IconButton from "@material-ui/core/IconButton";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

// 리덕스 스토어에 있는 스테이트(상태값을)를 props에 형태로 넣어주는, 컴포넌트에 넣어주는친구)
const mapStateToPorps = (state) => {
  // state 값은 스토어에 있는 이니셜스테이트 상태값
  return {
    dictionary_list: state.dictionary.list,
    is_loaded: state.dictionary.is_loaded,
  };
};

// 액션이 생기는 것을 감시하는 디스패치를 넘겨주는 친구
const mapDispatchToProps = (dispatch) => {
  // 액션함수 가져오기
  return {
    load: () => {
      dispatch(loadDictionaryFB());
    },
    create: (dictionary) => {
      dispatch(addDictionaryFB(dictionary));
    },
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // list: [
      //   {
      //     id: "list_0",
      //     title: "정ㅋ벅ㅋ",
      //     text: "정복하다",
      //     example: "리액트 정ㅋ벅ㅋ",
      //   },
      //   {
      //     id: "list_1",
      //     title: "정ㅋ벅ㅋ",
      //     text: "정복하다",
      //     example: "리액트 정ㅋ벅ㅋ",
      //   },
      // ],
    };

    this.title = React.createRef();
    this.text = React.createRef();
    this.example = React.createRef();
  }

  addDictionary = () => {
    // let list = this.state.list;

    const new_title = this.title.current.value;
    const new_text = this.text.current.value;
    const new_example = this.example.current.value;

    this.props.create({
      id: "list_111",
      title: new_title,
      text: new_text,
      example: new_example,
    });

    this.setState({
      //   list: [
      //     ...list,
      //     {
      //       title: new_title,
      //       text: new_text,
      //       example: new_example,
      //     },
      //   ],
    });
  };

  componentDidMount() {
    this.props.load();

    // const dictionary = firestore.collection("dictionarys");
    // // 새 콜렉션 만들기
    // dictionary.doc("my_dictionary1").set({
    //   title: "단어 이름-1",
    //   text: "단어 설명-1",
    //   example: "단어 예시-1",
    // });
    // dictionary
    //   .doc("my_dictionary1")
    //   .get()
    //   .then((doc) => {
    //     // doc에 값이 있나 없나
    //     if (doc.exists) {
    //       console.log(doc.data());
    //       console.log(doc.id);
    //     }
    //     console.log(doc.exists);
    //   });
    // 모든 값을 갖고오기(forEach) .doc이 없다.
    // dictionary.get().then((docs) => {
    //   // 배열로 만들어보기
    //   let dictionary_data = [];
    //   docs.forEach((doc) => {
    //     if (doc.exists) {
    //       dictionary_data = [...dictionary_data, { id: doc.id, ...doc.data() }];
    //     }
    //     // console.log(dictionary_data);
    //     // console.log(doc.data());
    //     // console.log(doc.id);
    //   });
    // });
    // 추가하기
    // dictionary
    //   .add({
    //     title: "단어 제목4",
    //     text: "단어 설명4",
    //     example: "단어 예시4",
    //   })
    //   .then((docRef) => {
    //     console.log(docRef);
    //     console.log(docRef.id);
    //   });
    // 업데이트하기
    // dictionary.doc("URbLAHHKW1XqZQvV3wlr").update({
    //   title: "단어 이름5",
    //   text: "단어 설명5",
    //   example: "단어 예시5",
    // });
    // 삭제하기
    // dictionary
    //   .doc("5MqUooLaLfZup79USLXF")
    //   .delete()
    //   .then((docRef) => {
    //     console.log("지웠어요!");
    //   });
    // console.log(this.props);
    // console.log({ firestore });
  }

  render() {
    return (
      <div className="App">
        {!this.props.is_loaded ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <Container>
              <Circle />
              <Title>나만의 단어장</Title>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Dictionary
                      history={this.props.history}
                      list={this.props.dictionary_list}
                    />
                  )}
                />
                <Route path="/detail/:index" component={Detail} />
                <Route
                  render={() => <NotFound history={this.props.history} />}
                />
              </Switch>
            </Container>

            <Input>
              <Fix>단어 :</Fix>
              <input type="text" ref={this.title} />
              <Fix>설명 :</Fix>
              <input type="text" ref={this.text} />
              <Fix>예시 :</Fix>
              <input type="text" ref={this.example} />
              <SaveButton>
                <IconButton onClick={this.addDictionary}>
                  <CloudUploadIcon fontSize="large" />
                </IconButton>
              </SaveButton>
            </Input>
          </React.Fragment>
        )}
      </div>
    );
  }
}
const move = keyframes`
  0% {
    top: 3px;
    left: 2px;
  }
  25% {
    top: 3px;
    left: 516px;
  }
  50% {
    left: 516px;
    top: 565px;

  }
  75% {
    top: 565px;
    left: 2px;
  }
  100% {
    top: 3px;
    left: 2px;
  }
`;

const Circle = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #6a7ba2;
  position: absolute;
  top: 3px;
  left: 4px;
  animation: ${move} 5s 1s infinite;
`;

const Fix = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #a7bcecd2;
  margin: 0;
`;

const SaveButton = styled.div`
  position: absolute;
  top: 75px;
  right: 10px;
`;

const Input = styled.div`
  position: relative;
  max-width: 500px;
  min-height: 10vh;
  background-color: #ffdfde;
  padding: 16px;
  margin: 20px auto;
  border-radius: 10px;
  border: 1px solid #eee;
  & * {
    padding: 5px;
  }
  & input {
    width: 80%;
    margin-bottom: 3px;
    &:focus {
      border: 3px solid #6a7ba2;
    }
  }
`;

const Container = styled.div`
  max-width: 500px;
  min-height: 60vh;
  background-color: #ffdfde;
  padding: 16px;
  margin: 20px auto;
  border-radius: 10px;
  border: 1px solid #eee;
  position: relative;
`;

const Title = styled.h1`
  color: #6a7ba2;
  text-align: center;
`;

export default connect(mapStateToPorps, mapDispatchToProps)(withRouter(App));
