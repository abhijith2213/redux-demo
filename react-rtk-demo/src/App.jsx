import './App.css'
import { CakeView } from './features/cake/CakeView'
import {IcecreamView} from './features/iceCream/IcecreamView'
import {UserView} from './features/user/UserView'

function App() {
  return (
    <div className="App">
      <div>
        <CakeView/>
        <IcecreamView/>
      </div>
      <div>
        <UserView/>
      </div>
    </div>
  )
}

export default App
