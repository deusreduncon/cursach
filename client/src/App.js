import Header from './components/header';
import AppRouter from './routes/AppRouter';
import { BrowserRouter } from "react-router-dom"

function App() {


  return (
      <BrowserRouter>
      <Header/>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
