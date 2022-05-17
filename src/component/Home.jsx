import {Container} from "react-bootstrap"
function test(){
    console.log(new Date().toLocaleTimeString())
    return <div>{new Date().getUTCSeconds()}</div>
}
const Home = () => {
    return <Container fluid>

        <button onClick={setInterval(test,1000)}>new element</button>
    </Container>;
};
export default Home;
