import React from "react";
import { Container, Row, Col } from 'reactstrap';

export default class AuctionItem extends React.Component  {
    constructor(props) {
        super(props);
        this._index = props.index;
        this._itemInfo = props.itemInfo;
        this._price = props.price;
        // this._imgURL = 0;

        // TODO
        this._remainTime = props.remainTime;

        this._seller = props.seller;
        this._winner = props.winner;
    }
    // constructor(contract) {
    //     // .........
    //     this._itemInfo = 0;
    //     this._price = 0;
    //     // this._imgURL = 0;
    //     this._remainTime = 0;
    //     this._seller = 0;
    //     this._winner = 0;
    // }
    // get itemInfo() {
    //     return this._itemInfo;
    // }
    // get price() {
    //     return this._price;
    // }
    // // get imgURL() {
    // //     return this._imgURL;
    // // }
    // get remainTime() {
    //     return this._remainTime;
    // }
    // get seller() {
    //     return this._seller;
    // }
    // get winner() {
    //     return this._winnere;
    // }
    render() {
        let str1 = "".concat(...["Auction ", this._index, ": "])
        // let str2 = "".concat(...["Price: ", this._price, "\t\t"])
        

        return (
            <Container>
                <Row>
                    <Col >
                        <p>{str1}</p>
                        <p>Price: </p>
                    </Col>
                    <Col >
                        <p>{}</p>
                        <p>{this._price}</p>
                    </Col>
                </Row>
                <Row>
                    <input type="text" placeholder="add a price..." />
                    <button > Add </button>
                </Row>
            </Container>
            
        );
    }

}