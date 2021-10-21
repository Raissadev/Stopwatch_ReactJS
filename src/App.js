import React, { Component } from 'react';
import './style.css';
import cronometroImg from './assets/cronometro.png';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'Vai'
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  vai(){
    let state = this.state; //para poder acessar a state do botão

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      this.state.botao = 'Vai';
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      },100);
        this.state.botao = 'Pausar';
    }
    this.setState(state);
  }
  limpar(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }
    state.numero = 0;
    state.botao = 'Vai';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">

        <div className="titleContent">
          <h2 className="title">Cronômetro</h2>
        </div>

        <div className="contentStopwatch">
          <a className="timer">{this.state.numero.toFixed(1)}</a>
        </div>

        <div className="areaBtn">
          <a onClick={this.vai} className="botao">
            <span>{this.state.botao}</span>
          </a>
          <a onClick={this.limpar} className="botao">
            <span>Zerar</span>
          </a>
        </div>

      </div>
    );
  }
}

export default App;

