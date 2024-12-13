import { useState } from 'react'
import Message from './Components/Message';
import './App.css'

function App() {
  const [showSorryMessage, setShowSorryMessage] = useState(true);

  const handleAcknowledge = () => {
    setShowSorryMessage(false);
  };
  return (
    <>
    <div>
      {showSorryMessage ? (
        <Message
          message="We're sorry for the inconvenience caused. Please let us know if there's anything we can do to help."
          onAcknowledge={handleAcknowledge}
        />
      ) : (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-3xl font-semibold">Thanks for understanding!</h1>
        </div>
      )}
    </div>
    </>
  )
}

export default App
