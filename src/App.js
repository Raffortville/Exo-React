import TopHeader from './Components/Header/topHeader'
import {HashRouter as Router, Switch,Route} from "react-router-dom"
import Interventions from './Pages/interventions'
import Accueil from './Pages/acceuil'
import Star from './Components/Design/Stars/stars'
import IconAdd from './Components/Design/Icons/iconAdd'

function App() {

  return (

    <Router>
      <div>
        <header>
          <TopHeader/>
        </header>
        <Star/>
          <IconAdd/> 
        <main className="container">
          <Switch>
            <Route exact path={'/'} component={Accueil}/>
            <Route exact path={'/Interventions'} component={Interventions}/>
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App;
