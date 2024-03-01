import './App.css';
import Header from './Header';
import Nav  from "./Nav";
import Results from "./Results";
import Footer from './Footer';
import { useState } from 'react';
import requests from './requests';
function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

	return (
		<div className='app'>
		
			<Header />


			<Nav setSelectedOption={setSelectedOption} />

			
			<Results selectedOption={selectedOption} />
		<Footer />
     </div>
   
  );
}

export default App;
