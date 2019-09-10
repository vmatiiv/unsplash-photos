import React from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar/SearchBar'
import ImageCard from './components/Images/ImageCard';

// acces key c17f72f1da2af64d21a59a5ea85d487547a01721df5310a592f4f6949aa68caf
//  secret key f7b58122423b39e865d8160e3de63c094949b6c8d3d4f95ae83096f61609890b
class App extends React.Component{

  state={
    images: [],
    searchQ: '',
    count:2,
    scrollHeight: document.body.scrollHeight
  }

  onFormSubmit = async (val)=>{
    this.setState({searchQ:val});
    const result = await axios.get('https://api.unsplash.com/search/photos',
    {
      params:{
        query: val,
        per_page: this.state.scrollHeight/160*(window.innerWidth/250)
      },
      headers:{
        Authorization: 'Client-ID c17f72f1da2af64d21a59a5ea85d487547a01721df5310a592f4f6949aa68caf'
      }
    });
    this.setState({images:result.data.results});

  };

  componentDidMount(){
    window.addEventListener('scroll',this.onScroll);
  }
  onScroll= () => {
    const scrollHeight = document.body.scrollHeight;
    const bottom = window.scrollY+window.innerHeight;
    // console.log(document.body.scrollHeight);
    // this.setState({scroll:window.scrollY});
    if (bottom===scrollHeight){
      this.setState({count: this.state.count+1});
      // console.log(document.body.scrollHeight/160*(window.innerWidth/250));
      this.onLoadingNextPage();
    }
  }
  onLoadingNextPage =async ()=>{
    const result =  await axios.get('https://api.unsplash.com/search/photos',
    {
      params:{
        query: this.state.searchQ,
        per_page: 10,
        page:this.state.count
      },
      headers:{
        Authorization: 'Client-ID c17f72f1da2af64d21a59a5ea85d487547a01721df5310a592f4f6949aa68caf'
      }
    });
  
    let arr = [...this.state.images];
    result.data.results.forEach(x=>arr.push(x))
    this.setState({images:arr});
  }
  
  render(){

    // const Image = this.state.images.map(x => <ImageItem key={x.id} photo={x}/>)
    

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />
        <ImageCard photos={this.state.images} />
      </div>
    )
  }
}

export default App;
