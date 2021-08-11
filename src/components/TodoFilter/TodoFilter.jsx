import './TodoFilter.scss';

export const TodoFilter = ({ value, onChange}) => (
  <div className="TodoFilter">
    <p className="TodoFilter__label">Фільтр по імені</p>
    <input
      type="text"
      className="TodoFilter__input"
      value={value}
      onChange={onChange}
    />
  </div>
);

