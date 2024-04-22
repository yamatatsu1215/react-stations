// DO NOT DELETE
import './App.css'
import Header from './Header';
import DogListContainer from './DogListContainer';

/**
 * @type {() => JSX.Element}
 */


export const App = () => {

  return (
    <div>
      <Header></Header>
      <DogListContainer />
    </div>
  )
}
