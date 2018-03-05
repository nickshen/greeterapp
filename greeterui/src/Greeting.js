import React, { Component } from 'react';
import {greeterAddress, greeterContract, user, balance, eth, web3} from './EthereumSetup';
import autobind from 'autobind-decorator';

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: "",
      value: "",
      promotion: "",
      pmessage: "",
      bid: 0,
      highestBid: 0,
    };
    this.loadGreeting = this.loadGreeting.bind(this);
    this.setGreeting = this.setGreeting.bind(this);
  }

  componentWillMount() {
    this.loadGreeting();
    this.loadPromoted();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleBid(event) {
    this.setState({bid: Number(event.target.value)});
  }

  handlePromotionalChange(event) {
    this.setState({pmessage: event.target.value});
  }

  // @autobind
  loadGreeting() {
    var data = greeterContract.getGreeting();
    this.setState({
      greeting: String(data),
    });
  }

  // @autobind
  setGreeting() {
    greeterContract.setGreeting(this.state.value);
    this.loadGreeting();
  }

  loadPromoted() {
    var promo = greeterContract.getPromoted();
    var cbid = greeterContract.bidPrice;
    this.setState({
      promotion: String(promo),
      highestBid: web3.toDecimal(cbid),
    });
    console.log(this.state);
  }

  setPromoted() {
    greeterContract.setPromoted(this.state.pmessage, {value: this.state.bid});
    this.loadPromoted();
  }

  render() {
    return (
      <div>
        <h2>Public Message: {this.state.greeting}</h2>
        <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
        <button onClick={this.setGreeting.bind(this)}>
          Send Message
        </button>
        <p>Address: {user}</p>

        <hr />
        <h2>Promoted Message: {this.state.promotion}</h2>
        <p>You must bid higher than the previous highest bid to overwrite the message.</p>
        <input type="text" value={this.state.bid} type="number" placeholder="Bid" onChange={this.handleBid.bind(this)} />
        <input type="text" value={this.state.pmessage} placeholder="Message" onChange={this.handlePromotionalChange.bind(this)} />
        <button onClick={this.setPromoted.bind(this)}>
          Purchase Promotional Message
        </button>
        <p>Balance: {eth.getBalance(user).toString()}</p>
      </div>
    );
  }
}

export default Greeting;
