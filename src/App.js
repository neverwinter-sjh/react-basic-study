// import React, { useRef, useEffect, useState } from 'react';
import React, { Component } from 'react';
// import CounterContainer from 'src/containers/CounterContainer';
// import EventPractice from 'src/components/EventPractice';
// import ValidationSample from 'src/components/ValidationSample';
// import ScrollBox from 'src/components/ScrollBox';
// import IterationSample from 'src/components/IterationSample';
import LifeCycleSample from 'src/components/LifeCycleSample';
import ErrorBoundry from 'src/components/ErrorBoundry';

// Functional Component에서 ref 사용하기
// const App = React.forwardRef((props, ref) => {
//   const [scrollFlag, setScrollFlag] = useState(false);
//   const scrollBox = useRef(null);
//   const button = useRef(null);  
//   useEffect(() => {
//     button.current.onclick = () => {
//       setScrollFlag(!scrollFlag);
//       setScrollFlag(!scrollFlag);
//     };  
//   });
  
//   return (
//     <div>
//       {/* <CounterContainer /> */}
//       {/* <EventPractice /> */}
//       <ValidationSample />
//       <ScrollBox ref={scrollBox} scrollToBottom={scrollFlag} />
//       <button type="button" ref={button}>
//         맨 밑으로
//       </button>
//     </div>
//   );
// });

function getRamdomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  };

  handleClick = () => {
    this.setState({
      color: getRamdomColor()
    });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          랜덤 색상
        </button>
        <ErrorBoundry>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundry>
      </div>
    );
  }
}
export default App;
