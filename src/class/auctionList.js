import React from 'react'
import AuctionItem from './auctionItem'

class AuctionList extends React.Component {
    render() {
        var items = this.props.items.map((item, index) => {
            return (
                <AuctionItem price={item} index={index}  />
            );
        });
        return (
            <ul className="list-group"> {items} </ul>
        );
    }
}

export default AuctionList;