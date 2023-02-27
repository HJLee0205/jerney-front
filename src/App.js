import logo from './logo.svg';
import './App.css';
import {BrowserView, MobileView} from "react-device-detect";

function App() {
  return (
    <div className="App">
      <BrowserView>
          데스크톱 브라우저
      </BrowserView>
      <MobileView>
          모바일 브라우저
      </MobileView>
    </div>
  );
}

export default App;
