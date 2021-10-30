import PropTypes from 'prop-types';
import s from './Statistics.module.scss';
import { randomColor } from './randomColor.js';

export function Statistics({ title, stats }) {
  const quantity = `${100 / stats.length}%`;

  return (
    <>
      <section className={s.statistics}>
        <h2 className={s.title}>{title}</h2>

        <ul className={s.stat__list}>
          {stats.map(item => {
            return (
              <li
                className={s.item}
                key={item.id}
                style={{ backgroundColor: randomColor(), flexBasis: quantity }}
              >
                <span className={s.label}>{item.label}</span>
                <span className={s.percentage}>{item.percentage}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

Statistics.defaultProps = {
  title: 'Title',
};

Statistics.prototypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
