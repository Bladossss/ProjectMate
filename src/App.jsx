import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/home"
import { Page1 } from "./Pages/Page1"
import { Page2 } from "./Pages/Page2"
import { Page3 } from "./Pages/Page3"
import { Layout } from "./Layout"
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/Pages/page1" element={<Page1 />} />
                        <Route path="/Pages/page2" element={<Page2 />} />
                        <Route path="/Pages/page3" element={<Page3 />} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}
export default App;