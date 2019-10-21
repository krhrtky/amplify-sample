import * as React from 'react';
import { render } from "react-dom";
import { useCallback, useState } from 'react';

const Main: React.FC = () => {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount(count + 1)
    }, [count])

  const reset = useCallback(() => {
    setCount(0)
  }, [count])

  return <>
    <h1>Hello</h1>
    <h2>{count}</h2>
    <button onClick={increment}>increment</button>
    <button onClick={reset}>reset</button>
  </>
}
class App extends React.Component {
  render() {
    return <Main/>
  }
}

render(<App/>, document.querySelector('#app'));
