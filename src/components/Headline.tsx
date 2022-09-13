import * as React from "react"
import Typist from "react-typist";

const SWITCH_DELAY = 5000
const TYPING_DELAY = 100
const TOTAL_COMPONENTS = 100

const BASE = "Your home co"
const ITERATIONS = [
  "mpanion",
  "nfidence",
  "mpletion",
  "mfort",
  "llection",
  "ming",
  "nsultant",
  "nscience",
]

const createTypistComponents = () => {
  let addedBase = false

  const components: JSX.Element[] = []
  let i = 1

  while (i <= TOTAL_COMPONENTS) {
    let iteration = ITERATIONS[Math.floor(Math.random() * ITERATIONS.length)]

    if (!addedBase) {
      components.push(<span>{BASE}{iteration}</span>)
      addedBase = true
    } else {
      components.push(<span>{iteration}</span>)
    }

    components.push(<Typist.Backspace
      count={i === TOTAL_COMPONENTS ? BASE.length + iteration.length : iteration.length}
      delay={SWITCH_DELAY}
    />)

    i += 1
  }

  return components
}

export const Headline = () => {
  const [count, setCount] = React.useState(1);

  return (
    <div>
      <Typist key={count} avgTypingDelay={TYPING_DELAY} onTypingDone={() => setCount(count + 1)}>
        {createTypistComponents()}
      </Typist>
    </div>
  );
}