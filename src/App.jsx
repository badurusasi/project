import CreateUsers from "./Components/CreateUsers"
import Home from "./Components/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Users from "./Components/Users"
import Edit from "./Components/Edit"
//testing
const App=()=>{
    return(
        <div>
        <BrowserRouter>
        <Home/>
        <Routes>
            <Route element={<CreateUsers/>} path="/" />
            <Route element={<Users/>} path="/users" />
            <Route element={<Edit/>} path="/edit/:xyz" />
        </Routes>
        </BrowserRouter>
        </div>
    )
}
export default App