import React from "react";
import axios from "axios";
import {BrowserView, MobileView} from "react-device-detect";
import FunctionComponent from "./functionComponent";
import ClassComponent from "./classComponent";
import MainPage from "./components/mainPage";


class App extends React.Component {
    state = {
        isLoading: true
    };

    // 마운트 된 후 실행되는 함수
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false })
        }, 5000);
    }

    render() {
        return <div>{this.state.isLoading ? "Loading..." : "Complete"}</div>
    }
}


export default App;
