// import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
// import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

import About from './pages/About';
import { FeedbackProvider } from './context/FeedbackContext';

import './App.css';


function App() {
  // const [feedback, setFeedback] = useState(FeedbackData);
  
  
  return (
    <FeedbackProvider>
    <Router>
    <Header/>
    <div className="container">
      <Routes>
        <Route exact path="/" element={
        <>
          {/* <FeedbackForm handleAdd={addFeedback}/> */}
          <FeedbackForm/>
        {/* <FeedbackStats feedback={feedback}/> */}
        <FeedbackStats/>
        {/* <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/> */}
        {/* <FeedbackList handleDelete={deleteFeedback}/> */}
        <FeedbackList/>
        </>
      }>
        </Route>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <AboutIconLink/>
    </div>
    </Router>
    </FeedbackProvider>
  );
}


export default App;
