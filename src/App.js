// import React, { useRef, useEffect, useState } from 'react';
import React from 'react';
// import CounterContainer from 'src/containers/CounterContainer';
// import EventPractice from 'src/components/EventPractice';
// import ValidationSample from 'src/components/ValidationSample';
// import ScrollBox from 'src/components/ScrollBox';
import IterationSample from 'src/components/IterationSample';

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

const App = () => {
  return (
    <div>
      <IterationSample />
    </div>
  );
};

export default App;
