import React, {Component} from 'react'
import './App.css'
import Header from './Components/Header'
import Posts from './Components/Posts'
import Form from './Components/Form'
import Button from './Components/Button'

class App extends Component {
  constructor(){
    super()
    this.state = {
      posts: [],
      title: '',
      img: '',
      content: '',
      id: 1
    }
  }

  handleChange=({name, value})=>{this.setState({[name]: value})}
  submitPost=()=>{
    const {title, img, content, id, posts} = this.state
    this.setState({posts: [{id, title, img, content}, ...posts], id: id+1, title: '', img: '', content: ''})
  }
  deletePost=(id)=>{
    const filteredArr = this.state.posts.filter(el => el.id !== id)
    this.setState({posts: filteredArr})
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <Form handleChange={this.handleChange} titleInput={this.state.title} imgInput={this.state.img} contentInput={this.state.content}/>
        <Button  submitPost={this.submitPost}/>
                {
                  this.state.posts.map((el, index)=>{
                    return <Posts key={index}
                    id={el.id}
                    title={el.title}
                    content={el.content}
                    img={el.img}
                    deletePost={this.deletePost}
                    />
                  })
                }
      </div>
    );
  }
}

export default App;
