import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Beranda extends Component {
    constructor(){
        super()
        this.state = {
            klub: [],
            loading: <img src="https://loading.io/spinners/comets/lg.comet-spinner.gif" alt=""></img>
        }
    }

    componentDidMount(){
        var url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain'
        axios.get(url)
        .then((x)=>{
            this.setState({
                klub: x.data.teams,
                loading: ''
            })
            console.log(x.data.teams)
            
        })
        
        .catch((x)=>{console.log(x)})
    }

    opsiliga = (x) => {
        this.setState({
            klub: [],
            loading: <img src="https://loading.io/spinners/comets/lg.comet-spinner.gif" alt=""></img>
        })
        var url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?${x}`
        axios.get(url)
        .then((x)=>{
            this.setState({
                klub: x.data.teams,
                loading: ''
            })
            console.log(x.data.teams)
            
        })
        
        .catch((x)=>{console.log(x)})

    }

  render() {
    var galeri = this.state.klub.map((val, i)=>{
        var nama = val.strTeam
        var logo = val.strTeamBadge

        return(
            <div className="card col-xs-3 col-sm-3 col-md-2 col-lg-2 col-xl-2"
            style={{width: "18rem"}} key={i}>
            <Link to={'/team/'+ nama} judul={nama}>
                <img className="card-img-top img-thumbnail" src={logo} alt=""></img>
                <div class="card-body">
                    <b className="card-text text-center">{nama}</b>
                </div>
            </Link>
            </div>
        )
    })

    return (
      <div>
        <h4>Home</h4>
        <select className='mb-5' onChange={(e)=>{
            console.log(e.target.value)
            this.opsiliga(e.target.value)
            }}>
            <option value="s=Soccer&c=Spain">LaLiga Spanyol</option>
            <option value="l=English%20Premier%20League">Premier League</option>
            <option value="l=German%20Bundesliga">Bundes Liga Jerman</option>
        </select><br/>
        {this.state.loading}
        <div className="row text-center">{galeri}</div>
      </div>
    );
  }
}

export default Beranda;
