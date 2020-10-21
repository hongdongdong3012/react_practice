import React from 'react'

class Button extends React.Component {

  constructor(){
    super();

    this.state = {
      clicked: false
    }
  }

  render() {
    return (
      <div
        className="btn"
        onClick={()=>{this.setState({clicked: !this.state.clicked})}}
      > 
        {this.state.clicked ? '좋아요' : '싫어요'}
      </div>
    );
  }
}

export default Button


/*
constructor() {
  super();

  this.state = {
    clicked: false
  }
}
Button 컴포넌트를 그리려면 this.state.clicked 값이 필요한데, 제일 최고에는 값이 없으므로 constructor()에서 값을 지정해준다.
super()라는 키워드는 꼭 작성해주어야 React.component class에 있는 메서드들을 renedr 할 수 있다.

*/