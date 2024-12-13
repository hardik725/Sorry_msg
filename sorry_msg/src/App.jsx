import { useState } from 'react'
import Message from './Components/message'
import './App.css'

function App() {
  const [showSorryMessage, setShowSorryMessage] = useState(true);

  const handleAcknowledge = () => {
    setShowSorryMessage(false);
  };
  return (
    <>
    <p class="bg-red-600">Hi my name is Hardik</p>
    <div>
      {showSorryMessage ? (
        <SorryMessage
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
