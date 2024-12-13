import { useState } from "react"
import { Button } from "./components/ui/button"

function App() {
  const [count, setCount] = useState(0);

 
  return (
    <>
      <div>
        <h1>{count}</h1>
        <Button onClick={() => setCount((prev) => prev + 1)}>Click Me!</Button>
      </div>
    </>
  )
}

export default App
