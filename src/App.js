import React from "react";
import styled, { keyframes } from "styled-components";

import Dictionary from "./Main";
import Detail from "./Detail";
import NotFound from "./NotFound";

import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux"; // 커넥트함수
import { loadDictionary, createDictionary } from "./redux/modules/dictionary"; // 액션함수

// 리덕스 스토어에 있는 스테이트(상태값을)를 props에 형태로 넣어주는, 컴포넌트에 넣어주는친구)
const mapStateToPorps = (state) => {
  // state 값은 스토어에 있는 이니셜스테이트 상태값
  return { dictionary_list: state.dictionary.list };
};

// 액션이 생기는 것을 감시하는 디스패치를 넘겨주는 친구
const mapDispatchToProps = (dispatch) => {
  // 액션함수 가져오기
  return {
    load: () => {
      dispatch(loadDictionary());
    },
    create: (dictionary) => {
      dispatch(createDictionary(dictionary));
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
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
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
            <Route render={() => <NotFound history={this.props.history} />} />
          </Switch>
        </Container>
        <Input>
          <Fix>단어 :</Fix>
          <input type="text" ref={this.title} />
          <Fix>설명 :</Fix>
          <input type="text" ref={this.text} />
          <Fix>예시 :</Fix>
          <input type="text" ref={this.example} />
          <button onClick={this.addDictionary}>추가하기</button>
        </Input>
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

const Input = styled.div`
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
    width: 70%;
    margin-bottom: 3px;
    &:focus {
      border: 3px solid #6a7ba2;
    }
  }
  & button {
    margin: 0 0 0 20px;
    width: 20%;
    color: #ffdfde;
    background-color: #6a7ba2;
    border: 1px solid #6a7ba2;
    border-radius: 5px;
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
