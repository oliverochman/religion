import 'semantic-ui-css/semantic.min.css'
import Posts from './Components/Posts'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import OnlineResources from './Components/OnlineResources'
import Books from './Components/Books'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Grid, Header } from 'semantic-ui-react'


const App = () => {
  return (
    <>
      <Router>
        <Header as='h2' icon textAlign='center'>
          <Header.Content>What is out there</Header.Content>
        </Header>
        <Grid>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Switch>
              <Route exact path='/' component={Home}></Route>

              <Route exact path='/posts' component={Posts}></Route>

              <Route exact path='/online-resources' component={OnlineResources}></Route>

              <Route exact path='/books' component={Books}></Route>
            </Switch>
          </Grid.Column>
        </Grid>
      </Router>
    </>
  );
}

export default App;
