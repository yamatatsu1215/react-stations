// DO NOT DELETE
import './App.css'
import Header from './Header';
import DogListContainer from './DogListContainer';
import Description from './Description';
/**
 * @type {() => JSX.Element}
 */


export const App = () => {

  return (
    <div>
      <Header></Header>
      <Description />
      <DogListContainer />
    </div>
  )
}
