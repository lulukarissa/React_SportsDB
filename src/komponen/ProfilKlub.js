import React, { Component } from 'react';
import axios from 'axios';

class ProfilKlub extends Component {
    state = {
        loading: <img src="https://loading.io/spinners/comets/lg.comet-spinner.gif" alt=""></img>,
        players: []
    }
    componentDidMount(){
    console.log(this.props)
    var klub = this.props.match.params.profil
    var link = `https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t=${klub}`

    axios.get(link)
    .then((x)=>{
        this.setState({
            players: x.data.player,
            loading: ''
        })
        console.log(x.data.player)
    })
    .catch()
  }
  render() {

    var pemain = this.state.players.map((val, i)=>{
        var nama = val.strPlayer
        var foto = val.strThumb
        var foto2 = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        return(

            <div className="card col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-2"
            style={{width: "18rem"}} key={i}>
                <img className="card-img-top img-thumbnail" src={foto ? foto : foto2 } alt=""></img>
                <div class="card-body">
                    <b className="card-text text-center">{nama}</b>
                </div>
            </div>
        )
    })
    return (
      <div>
        <h4>Profile</h4>
        {this.state.loading}
        <h6>{this.state.url}</h6>
        <div className="row text-center">{pemain}</div>
      </div>
    );
  }
}

export default ProfilKlub;
