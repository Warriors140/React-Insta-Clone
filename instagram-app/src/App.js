import React from 'react';
import './App.css';
import dummydata from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import CommentSection from './components/CommentSection/CommentSection';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummydata,
    };
  }
  render() {
    console.log(dummydata)
    return (
      <div className='App'>
        <SearchBar />
        {dummydata.map(post => <PostContainer {...post} key={post.id}></PostContainer> )}
      </div>
    );
  }
}

export default App;
