# 리액트 연습 (참고 사이트 : https://velog.io/@hyounglee/TIL-40)

<br>

## React?
UI를 더 잘 만들기 위해 만들어진 JavaScript UI 라이브러리다.

<br>

## Rendering
HTML 요소 또는 React 요소 등의 코드가 눈으로 볼 수 있도록 그려지는 것.

<br>

## Component
재사용이 가능한 UI 단위이다. 독립적으로, 재사용 가능한 코드로 관리할 수 있다.

<br>

### props는 부모 컴포넌트가 자식 컴포넌트에게 주는 값 (수정 불가)
### state는 컴포넌트 내부에서 선언하여 내부에서 값을 변경가능

## Component - State
state란 말 그대로 컴포넌트의 상태 값이다. state와 props는 둘 다 화면에 보여줄 정보(상태)를 가지고 있다는 점에서 서로 비슷한 역할을 한다.
props는 컴포넌트를 사용하는 부모쪽에서 전달해야만 사용할 수 있고
state는 컴포넌트 내에서 정의하고 사용한다.
state 이름은 원하는 대로 지을 수 있다.
<br>
초기 값이 this.state, state를 업데이트하기 위해 this.setState()를 사용한다.