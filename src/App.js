import React, { Component } from "react";
import './style.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'START'
    };
    this.timer = null;
    this.start = this.start.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  start() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'START';
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.botao = 'STOP';
    }

    this.setState(state);

  }

  limpar() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'START';
    this.setState(state);

  }


  render() {
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img" />
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBTN">
          <a className="botao" onClick={this.start}>{this.state.botao}</a>
          <a className="botao" onClick={this.limpar}>LIMPAR</a>
        </div>
      </div>
    );
  }
}

export default App;