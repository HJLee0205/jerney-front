import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import MainPage from "./routes/MainPage";

function App() {
    return (
    // 라우터 : 한 페이지 내에서 명령에 따라 필요한 컴포넌트를 호출
        <BrowserRouter>
            {/*<Navigation />*/}
            <Routes>
                {/*<Route path="/" exact={true} element={<Home />} />*/}
                {/*<Route path="/about" element={<About />} />*/}
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;
