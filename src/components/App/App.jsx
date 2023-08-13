import Phonebook from '../Phonebook/Phonebook';
import css from './App.module.css';

const App = () => {
  return (
    <div className={css.app}>
      <Phonebook />
    </div>
  );
};

export default App;
