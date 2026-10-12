import {Route, Routes , BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Student from "./pages/Student"
import CountryList from "./pages/CountryList"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/student/:id" element={<Student />}/>
        <Route path="/countries" element={<CountryList />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
