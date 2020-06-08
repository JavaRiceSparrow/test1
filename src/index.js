import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import showingtool1 from './class/showingtool';
// import Button1 from './class/Button';
import AuctionItem from './class/auctionItem'
import AuctionList from './class/auctionList'
import * as serviceWorker from './serviceWorker';

// import { Container, Row, Col } from 'reactstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    // this.addItem = this.addItem.bind(this);
    // this.removeItem = this.removeItem.bind(this);
    // this.markTodoDone = this.markTodoDone.bind(this);
    // this.state = { todoItems: todoItems, web3: null, accounts: null, contract: null 
    // };
  }
  // handleClick = buttonName => {

  // };
  render() {
    return (
      <div className="App">
        {/* <Container>
          <Row>
            <Col md="auto">1 of 2</Col>
            <Col md="auto">2 of 2</Col>
          </Row>
          <Row>
            <Col md="auto">1 of 3</Col>
            <Col md="auto">2 of 3</Col>
            <Col md="auto">3 of 3</Col>
          </Row>
        </Container> */}

        
        {/* <h1>I am a Header.</h1> */}
        {/* <showingtool1 /> */}
        {/* <h2>S.H.I.T!</h2> */}
        {/* <Button1 /> */}
        <h1>it's {new Date().toLocaleTimeString()}</h1>
        <AuctionItem index={0} price={100} />
        <AuctionList items={[80, 20, 160,  new Date().toLocaleTimeString() ]} />
        {/* <h1>I am a Header, too!</h1> */}

        

      </div>
    );
  }
}
function tick(){
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
