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
            this.setState({testdata : response.data})
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
            testdata.map((tdata) => {
                return (
                    // js 배열은 정적이지 않으므로 ListToMap 구현일 경우에는 key를 지정해줘야함
                    <div>
                        <h1>api 통신 테스트</h1>
                        <h2 key={tdata.a}>{tdata.name}</h2>
                        <h2 key={tdata.b}>{tdata.age}</h2>
                    </div>
                );
            })
        );
    }
}


export default MainPage;
