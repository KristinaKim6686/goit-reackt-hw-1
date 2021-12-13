import PropTypes from "prop-types";
import style from "./Statistics.module.css";
import getRandomRgbColor from "../../utils/math-randomiser";

const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.list}>
        {stats.map((item) => (
          <li
            className={style.item}
            key={item.id}
            style={{ backgroundColor: getRandomRgbColor() }}
          >
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}> {item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
};
export default Statistics;
