import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' }
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    setNames([
      ...names,
      { id: nextId, text: inputText }
    ]);
    setNextId(nextId+1);
    setInputText('');
  };

  const onRemove = name => {
    const reservedNames = names.filter(n => n.id !== name.id);
    setNames(reservedNames);
  };

  const namesList = names.map(name => (
    <li key={name.id}>
      {name.id}: {name.text} 
      <button type="button" onClick={() => onRemove(name)}>X</button>
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button type="button" onClick={onClick}>추가</button>
      <ul>
        {namesList}
      </ul>
    </>
  );
};

export default IterationSample;