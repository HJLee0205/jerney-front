import {BrowserView, MobileView} from "react-device-detect";
import FunctionComponent from "./functionComponent";
import ClassComponent from "./classComponent";


function App() {
  return (
    <div className="App">
      <BrowserView>
          <h1> React Practice </h1>
            <h2> 함수형 컴포넌트 </h2>
                <FunctionComponent />
            <h2> 클래스형 컴포넌트 </h2>
                <ClassComponent />
      </BrowserView>
      <MobileView>
          모바일 브라우저
      </MobileView>
    </div>
  );
}


export default App;
