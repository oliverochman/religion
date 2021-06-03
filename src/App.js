import 'semantic-ui-css/semantic.min.css'
import Posts from './Components/Posts'
import Sidebar from './Components/Sidebar'
import OnlineResources from './Components/OnlineResources'
import {
  BrowserRouter as Router,
  Switch,
  Route,
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

              <Route exact path='/' component={Posts}></Route>

              <Route exact path='/online-resources' component={OnlineResources}></Route>

            </Switch>
          </Grid.Column>
        </Grid>
      </Router>
    </>
  );
}

export default App;
