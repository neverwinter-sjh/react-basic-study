import React, { useRef, useEffect } from 'react';

const ScrollBox = React.forwardRef((props, ref) => {

  const box = useRef(null);

  const scrollToBottom = box => {
    const { scrollHeight, clientHeight } = box;
    box.scrollTop = scrollHeight - clientHeight;
  };

  useEffect(() => {
    if(props.scrollToBottom) {
      scrollToBottom(box.current);
    }
  });

  const style = {
    border: '1px solid black',
    height: '300px',
    width: '300px',
    overflow: 'auto',
    position: 'relative'
  };

  const innerStyle = {
    width: '100%',
    height: '650px',
    background: 'linear-gradient(white, black)'
  };

  return (
    <div
      style={style}
      ref={box}
    >
      <div style={innerStyle}></div>
    </div>
  );
});

export default ScrollBox;