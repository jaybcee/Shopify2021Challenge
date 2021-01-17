import React, {Component} from 'react';
import { Input,Row,Col, message, Card} from 'antd';
const { Search } = Input;
import MovieCard from '../components/MovieCard'
import axios from 'axios';

class Foo extends Component {

  state = {
    movies : [],
    nominated :[],
    nomCount : 5
  }

  _onSearch = (val) => {
    
    axios.get('https://www.omdbapi.com',{
      params:{
      apikey: "25babdfb",
      type: 'movie',
      s: val,
    }}).then(res => {
      this.setState({movies:res.data.Search})
        console.log(res.data.Search);
    })

  }

  _onNominate = (movie) => {
    if(this.state.nomCount===0){
      message.error('You have reached the maximum number of nominations')
      return null
    }
    let nom = [...this.state.nominated]
    nom.push(movie)
    this.setState({nominated:nom, nomCount:this.state.nomCount-1})
  }
  _onRemoveNom = (movie) =>{
    let nom = [...this.state.nominated]
    nom = nom.filter(m => m.imdbID !== movie.imdbID)
    this.setState({nominated:nom, nomCount:this.state.nomCount+1})
  }
  _isMovieNom = (movie) => {
    let idx =this.state.nominated.findIndex(m => m.imdbID === movie.imdbID)
    return idx!==-1
  }

  render(){
    return (
    <div>
      <Row
      style={{'marginTop':'4px'}} 
      gutter={[16, 16]}
      justify="center">
      <Col>    
      <Search
      placeholder="Enter your movie!"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={this._onSearch}
    /></Col>
    </Row>
    <div className="site-card-wrapper">
    <Row 
    gutter={[16, 16]}
    justify="center">
      <Col>
        <h1>Search Results</h1>
        {this.state.movies && this.state.movies.length > 0 ?
        // <MovieCard />t
        this.state.movies.map((m,i) => (
          <MovieCard key={i} idx={i} isNom={false} disabled={this._isMovieNom(m)} info={m}  onClick={this._onNominate}/>
        )) : 
        <Card style={{ width: 500 }} title={"Get started!"}>
          <div height={300}>
            Enter your favorite movie and hit search to get started!
          </div>
        </Card>
    }
      </Col>
      <Col>
      <h1>Nominations ({this.state.nomCount} left)</h1>
      {this.state.nominated && this.state.nominated.length >0 ?
        this.state.nominated.map((m,i) => {
            return <MovieCard key={i} idx={i} isNom={true} disabled={false} info={m} allowNomination={true} isNominated ={m.nominated || false} onClick={this._onRemoveNom}/>
        }):
        <Card style={{ width: 500 }} title={"Nominate a movie to see it here!"}>
          <div height={300}>
            All of your nominations will help decide the winner of The Shoppies
          </div>
      </Card>
    }
      </Col>
    </Row>
  </div>
  </div>
    )
  }
}



export default Foo;
