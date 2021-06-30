import React from "react";
import styled from "styled-components";

import Dictionary from "./Main";
import Detail from "./Detail";
import NotFound from "./NotFound";

import { withRouter } from "react-router";
import { Route, Link, Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

    this.title = React.createRef();
    this.text = React.createRef();
    this.example = React.createRef();
  }

  addDictionary = () => {
    let list = this.state.list;

    const new_title = this.title.current.value;
    const new_text = this.text.current.value;
    const new_example = this.example.current.value;

    this.setState({
      list: [
        ...list,
        {
          title: new_title,
          text: new_text,
          example: new_example,
        },
      ],
    });
  };

  componentDidMount() {
    console.log(this.state.list);
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Title>나만의 단어장</Title>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <Dictionary
                  history={this.props.history}
                  list={this.state.list}
                />
              )}
            />
            <Route path="/detail" component={Detail} />
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
      border: 2px solid #6a7ba2;
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
`;

const Title = styled.h1`
  color: #6a7ba2;
  text-align: center;
`;

export default withRouter(App);
