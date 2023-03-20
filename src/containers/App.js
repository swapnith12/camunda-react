import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Header } from 'semantic-ui-react'
import DeployProcess from '../components/DeployProcess'


const App = ({actions, children}) => (
  <div>
    <Container text>
      <Header as='h2' className='text-primary'>Truviq-Demo Application</Header>
      <p>This project shows how one can use React Redux with the standard Camunda REST API. It is an example implementation of how one could build a Tasklist for Camunda using Front End technology only.The Task Forms are defined within this application and not on the Server-Side to make it very easy to use.This project was bootstrapped with Create React App. Please see the React Scripts Guide to see what you can do with this project from the React perspective.</p>
      <p>After uploading the process you should probably go to "Start Process" and choose the "My Process" Process.</p>
      <Link to="/startprocess/list"><button className='btn btn-primary'>Start Process</button></Link>
      <DeployProcess/>
    </Container>
  </div>
)

const mapStateToProps = state => ({
})

export default connect(
  mapStateToProps,
)(App)
