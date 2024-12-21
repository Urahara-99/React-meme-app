import React from "react"
import FetchData from "./components/FetchData"
import Header from "./components/Header"
import Main from "./components/Main"
import WindowTracker from "./components/WindowTracker"


function App() {

  const [show, setShow] = React.useState(true);
  function handleToggle() {
    setShow(prev=> !prev)
  }
  return (
    <>
      {/* <Header/>
      <Main /> */}
      {/* <FetchData /> */}
      <main className="container">
            <button onClick={handleToggle}>
                Toggle WindowTracker
            </button>
            {show && < WindowTracker />}
        </main>
    </>
  )
}

export default App
