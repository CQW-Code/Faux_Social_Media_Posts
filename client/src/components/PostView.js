import React from 'react';
import {connect} from 'react-redux';
import{
  Divider,
  Header,
  Image,
  Container,
  Table
} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import PostForm from './PostForm';

class PostView extends React.Component {
  state = {showForm: false}

  toggleForm =() => {
    this.setState(state => {
      return {showForm: !showForm}
    })
  }
  render() {
    const {showForm} = this.state;
    const {post = {}} =this.props;
    return(
      <Container>
      <Link to="/posts">View All Posts</Link>
      <Button onClick = {this.toggleForm}>
      {showForm ? 'Cancel':'Edit'}
      </Button>
      {showForm ?
        <PostForm{...post} closeForm={this.toggleForm}/>
      :
      <div>
      <Header as="h3" textAlign="center">{post.title}</Header>
      <Image src={post.avatar} />
      <Table definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Comment</Table.Cell>
            <Table.Cell>{post.comment}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Author</Table.Cell>
            <Table.Cell>{app.name}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Date</Table.Cell>
            <Table.Cell>{post.date}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </div>
      }
    </Container>
    )
  }}


  const mapStateToProps = (state, props) => {
    return {post: state.posts.find(p=> p.id === parseInt(props.match.params.id))}
  }

export default connect(mapStateToProps)(PostView);