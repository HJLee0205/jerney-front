import propTypes from "prop-types";
import JerneyList from "./jerneylist";
import Jerney from "./jerney";

// 타입 체크
JerneyList.propTypes = {
    name : propTypes.string.isRequired,
    type : propTypes.string.isRequired
}

const ItemList = [
    {
        name : "First",
        type : "O"
    },
    {
        name : "prop error type",
        type : "B"
    },
    {
        name : "Third",
        type : "O"
    }
]

const FunctionComponent = () => {
    return (
        <div>
        {/* JSX 내에서 중괄호를 이용하여 자바스크립트 사용 가능 */}
            <p> 단일형 프로퍼티1 : <Jerney props="단일 호출1" /> </p>
            <p> 단일형 프로퍼티2 : <Jerney props="단일 호출1" /> </p>
            <p> 리스트형 프로퍼티 : </p>
            {ItemList.map(player => <JerneyList fav={player.name} type={player.type}/> )}
        </div>
    );
}

export default FunctionComponent