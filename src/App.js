/** @format */

import "./App.css";
import Home from "./components/home/home";
import NoPage from "./components/nopage/nopage";
import SideBar from "./components/sideBar/sideBar";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn/signIn";

import Register from "./components/register/register";
import SearchHistory from "./components/searchHistoryContainer/searchHistoryContainer";
import SearchHistoryContainer from "./components/searchHistoryContainer/searchHistoryContainer";
function App() {
//   const url = 'https://chatgpt-open-ai-nlp.p.rapidapi.com/';
// const options = {
// 	method: 'POST',
// 	headers: {
// 		'content-type': 'application/json',
// 		Type: 'chatgpt4-chat',
// 		'X-RapidAPI-Key': 'ae822103d0msh890010ddadace4ep14f398jsn814a473463bc',
// 		'X-RapidAPI-Host': 'chatgpt-open-ai-nlp.p.rapidapi.com'
// 	},
// 	body: {
// 		messages: [
// 			{
// 				role: 'system',
// 				content: 'You are a helpful assistant.'
// 			},
// 			{
// 				role: 'user',
// 				content: 'Who won the world series in 2020?'
// 			},
// 			{
// 				role: 'system',
// 				content: 'The Los Angeles Dodgers won the World Series in 2020.'
// 			},
// 			{
// 				role: 'user',
// 				content: 'Where was it played?'
// 			}
// 		],
// 		temperature: '0.7'
// 	}
// };

// try {
// 	const response =  fetch(url, options);
// 	const result =  response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
  return (
    <div className="App">
      <div className="App-components">
        
        <BrowserRouter>
          <SideBar />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="searchHistoryContainer" element={<SearchHistoryContainer />} />
            <Route path="signin" element={<SignIn />}></Route>{" "}
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
