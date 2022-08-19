import './App.css';
import ToDo from './cc/toDo';
import Home from './cc/login';
import NoPage from './cc/pagenotFount';
import Listview from './cc/listpage';
import Layout from './cc/dasbord';
import Homefirst from './cc/firstpage'
import ErrorBoundary from './cc/ErrorBoundary';
import { BrowserRouter,Routes,Route}  from 'react-router-dom';
// import Test from './cc/test';

// import Roomlogin from './cc/roomlogin'


function App() {
  return (
    <div className="App">

     <ErrorBoundary>
      <BrowserRouter>
      <Routes>

      <Route path="/" element={<Home />} />
      
      
      <Route path="dasbord" element={<Layout/>}>
        <Route path="firstpage" index element={<Homefirst/>} />
        <Route path="toDo"  element={<ToDo />} />
        <Route path="listpage" element={<Listview />} />
        <Route path="*" element={<NoPage />} />
      </Route>

       
      </Routes>
    </BrowserRouter>
    </ErrorBoundary>
    </div>
  );
}

export default App;