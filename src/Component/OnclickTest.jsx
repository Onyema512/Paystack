import React, { useState} from 'react'

const OnclickTest = () => {
const [a, setA] = useState (0)
const Add = () => {
    setA(a + 1);
};
const Sub =() => {
    if (a > 0){
    setA(a-1)
} else {
    setA(0)
};
};
  return (
    <div>
      <button onClick={Add}>+</button>
      <span>{a}</span>
      <button onClick={Sub}>-</button>
    </div>
  )
}

export default OnclickTest
