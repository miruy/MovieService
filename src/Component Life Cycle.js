import { current } from "daisyui/src/colors";
import React from "react";

/* 
  - function component -> class component 으로 변경
    + Function component : 함수, return 사용하여 UI에 표시
    + Class component : 클래스, React.component로 부터 확장되어 render() 사용하여 UI에 표시
  - extends : 연장, 확장
  - class component에서는 객체, 함수를 사용할 때 꼭 this를 붙힌다.(state를 직접 변경 X, set변경 O)
  
  - * setState를 호출할 때마다 react는 새로운(업데이트 된)데이터와 함께 render()안의 내용을 ReRendering함
  - component life cycle
    : 컴포넌트 라이프 사이클, mounting, componentDidMount, updating, componentDidUpdate, unMounting 등이 있음
  */

class App extends React.Component {

  // 1
  constructor(props) {
    super(props);
    console.log("constructor() : 페이지가 첫 실행될 때 호출");
  }

  state = { // 바꾸고 싶은 데이터를 state에 넣는다.
    count: 0
  }

  add = () => {
    // 외부 상태에 의존하지 않는 것이 좋은 코드 -> current로 state를 명시
    this.setState(current => ({ count: current.count + 1 }));
  }

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  }

  // 3
  componentDidMount() {
    console.log("componentDidMount() : 페이지 첫 실행, setState가 아닌 state 변경에 의한 rendering 이후에 호출");
  }

  // 5
  componentDidUpdate() {
    console.log("componentDidUpdate() : 컴포넌트 실행(setState)에 의한 rendering 이후에 호출(* update == setState 호출 == 개발자가 구현한 이벤트 기능)");
  }

  // 2
  // setState 호출(=개발자가 구현한 이벤트 기능(Add, Minus)) - 4
  render() {
    console.log("render() : 페이지 첫 실행 또는 컴포넌트 실행(setState) 후 변경된 state를 호출");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;