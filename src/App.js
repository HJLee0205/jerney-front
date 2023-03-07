import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./routes/About";

function App() {
    return (
    // 라우터 : 한 페이지 내에서 명령에 따라 필요한 컴포넌트를 호출
        <BrowserRouter>
            <Routes>
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;
