import React, {Component} from 'react'

export default class Form extends Component{
  constructor(){
    super()
    this.state = {
      titleInput: '',
      imgInput: '',
      contentInput: ''
    }
  }

  render(){
    return(
      <div>
        <input placeholder="input" name="title" 
        value={this.props.titleInput}
        onChange={e => this.props.handleChange(e.target)}/>
        <input placeholder="input" name="img" 
        value={this.props.imgInput}
        onChange={e => this.props.handleChange(e.target)}/>
        <input placeholder="input" name="content" 
        value={this.props.contentInput}
        onChange={e => this.props.handleChange(e.target)}/>
      </div>
    )
  }
}