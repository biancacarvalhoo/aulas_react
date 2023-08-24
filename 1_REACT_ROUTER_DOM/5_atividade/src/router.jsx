import {Routes, Route} from "react-router-dom"
import Pag1 from "./pages/Pag1"
import Pag2 from "./pages/Pag2"


function Router () {
    return(
        <Routes>
           <Route path="/" element={<Pag1 />} />
           <Route path="/Pag2" element={<Pag2 />} />
        </Routes>
    )
}

export default Router