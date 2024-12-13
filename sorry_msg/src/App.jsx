import { useState } from 'react';
import Message from './Components/Message';
import './App.css';

function App() {
  const [showSorryMessage, setShowSorryMessage] = useState(true);

  const handleAcknowledge = () => {
    // Redirect to an HTML page
    window.location.href = '/thanx.html'; // Adjust the path to match the location of your HTML file
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
          <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-semibold mb-4">Thanks for understanding!</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
