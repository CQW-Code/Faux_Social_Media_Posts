import React from 'react';
import {connect} from 'react-redux';
import {updatePost, addPost} from '../actions/posts';
import {Form} from 'semantic-ui-react';

class PostForm extends React.Component {

initialState = {
  name: '',
  avatar: '',
  title: '',
  comment: '',
  date: ''
}

state = {...this.initialState}

componentWillMount() {
  if (this.props.id)
    this.setState({...this.props})
}

handleChange=(e) =>{
  const {name, value} = e.target
  this.setState =({[name]: value})
}

handleSubmit =(e) => {
  e.preventDefault()
  const post = {...this.state}
  const {closeForm, dispatch} = this.props
  const func = this.props.id ? updatePost : addPost
  dispatch(func(post))
  closeForm()
}
  render() {
    const {name, title, comment, date} = this.props
    return(
      <Form onSubmit = {this.handleSubmit}>
      <Form.Input
        name= 'name'
        required
        defaultValue = {name}
        onChange= {this.handleChange}
        label = 'Author: '
        />
        <Form.Input
        name= 'title'
        defaultValue = {title}
        onChange= {this.handleChange}
        label = 'Title/Subject: '
        />
      <Form.Textarea autoHeight placeholder='Comment here'
        name= 'comment'
        defaultValue = {comment}
        onChange= {this.handleChange}
        label = 'Comment: '
        />
        <Form.Input
        name= 'date'
        defaultValue = {date}
        onChange= {this.handleChange}
        label = 'Date: '
        />
        <Form.Button>Save</Form.Button>

      </Form>

    )
  }
}

export default connect()(PostForm);