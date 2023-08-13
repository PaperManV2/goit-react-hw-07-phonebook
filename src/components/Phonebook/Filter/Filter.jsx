import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css['filter-container']}>
      <label htmlFor="filter" className={css['filter-label']}>
        Filter contacts:
      </label>
      <input
        type="text"
        id="filter"
        className={css['filter-input']}
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
