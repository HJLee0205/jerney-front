import {BrowserView, MobileView} from "react-device-detect";
import FunctionComponent from "./functionComponent";
import ClassComponent from "./classComponent";
import MainPage from "./components/mainPage";


function App() {
  return (
    <div className="App">
      <BrowserView>
          {/*<h1> React Practice </h1>*/}
            {/*<h2> 함수형 컴포넌트 </h2>*/}
            {/*    <FunctionComponent />*/}
            {/*<h2> 클래스형 컴포넌트 </h2>*/}
            {/*    <ClassComponent />*/}
            <h2> Main </h2>
                <MainPage />
      </BrowserView>
      <MobileView>
          Mobile Page
      </MobileView>
    </div>
  );
}


export default App;
