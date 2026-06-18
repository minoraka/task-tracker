import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000/api",
});


import BoardPage from "./pages/BoardPage";

function App() {
  return <BoardPage />;
}

export default App;