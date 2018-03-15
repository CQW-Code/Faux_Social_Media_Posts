import React from 'react';
import {Link} from 'react-router-dom';
import {Header} from 'semantic-ui-react';

const Home=()=> (
  <Header textAlign='center' as='h'>Welcome to the <Link to= '/posts'>DPL Board</Link></Header>
)

export default Home;