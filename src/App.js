import Navbar from './Navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
// import NotFound from './NotFound';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            {/* <Route path="/"> */}
            


<Route exact path="/" element={<Home />} />
<Route path="/create" element={<Create />} />
                  {/* </Route> */}
                  <Route path="/blogs/:id" element={<BlogDetails />} />
                  {/* <Route path ="*"><NotFound></NotFound></Route> */}
                  {/* <Route path="*">
              <NotFound />
            </Route> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;