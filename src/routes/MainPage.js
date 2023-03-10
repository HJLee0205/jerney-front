import React from "react";
import axios from "axios";


class MainPage extends React.Component {
    state = {
        testdata : []
    };

    getApi = async() => {
        try {
            const response = await axios.get("http://localhost:8080/test");
            console.log(response);
            this.setState({response})
        } catch (error) {
            console.log(error);
        }

    }


    // 마운트 된 후 실행되는 함수
    componentDidMount() {
        this.getApi();
    }

    render() {
        const { testdata } = this.state;
        return (
            <div>
                <h1>api 통신 테스트</h1>
            </div>
        );
    }
}


export default MainPage;
