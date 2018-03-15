import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getPosts} from '../actions/posts';
import {
  Container, 
  Grid, 
  Header,
  Comment,
  Dropdown,
  Divider,
  Button
  } from 'semantic-ui-react';
  import PostForm from './PostForm';

  class Posts extends React.Component {
    
    state= {name: '', showForm: false}

    toggleForm= () => {
      this.setState(state => {
        return {showForm: !state.showForm}
      })
    }

    posts= () => {
      let {posts} = this.props;
      let {name} = this.state;
      let visible = posts;
      if (name)
        visible = posts.filter(p => p.name === name)

      return visible.map(post=> 
      <Comment.Group threaded size='massive'>
      <Header as='h3' dividing>Posts</Header>
      <Comment key= {post.id}>
        <Comment.Avatar src= {post.avatar}/>
        <Comment.Content>
          <Comment.Header>
             {post.title}
          </Comment.Header>
          <Comment.Author>
            <span>
            {post.name}
            </span>
          </Comment.Author>
          <Comment.Metadata>
            {post.date}
          </Comment.Metadata>
          <Comment.Text>
            {post.comment}
          </Comment.Text>
        </Comment.Content>
      </Comment>
      </Comment.Group>
    )
    }

    clearName = () => {
      this.setState({ name: '' })
    }
  
    handleChange = (e, {value}) => {
      this.setState({ name: value })
    }
  
    nameOptions = () => {
      const { names } = this.props;
      return names.map( (c,i) => {
        return { key: i, text: c, value: c }
      })
    }

    render() {
      const {name, showForm} = this.state
      return(
        <Container>
          <Header as='h3' textAlign='center'>Posts</Header>
          <Button onClick={this.toggleForm}>
          {showForm ? 'Hide Form' : 'Show Form'}
          </Button>
          {showForm ? 
          <PostForm closeForm= {this.toggleForm}/>
          : 
          <div>
          <Dropdown
          placeholder='Filter by name'
          fluid
          selection
          options = {this.nameOptions()}
          value = {name}
          onChange = {this.handleChange}
          />

        { name && 
        <Button 
        fluid 
        basic 
        onClick = {this.clearName}  
        >
        Clear Filter: {name}
        </Button> 
        }    
        <Divider />
        
          <Comment.Group>
            {this.posts()}
          </Comment.Group>
          </div>
          }
        </Container>
      )
    }
  }

  const mapStateToProps=(state) => {
    const posts= state.posts;
    const names = [...new Set(posts.map(p=> p.name))]
    return {posts, names}
  }
  export default connect(mapStateToProps)(Posts);