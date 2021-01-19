import PropTypes from 'prop-types';
import s from './Statistics.module.css'

function Statistics({title, stats}) {
    return (
        <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.statList}>
                    {stats.map(({id, label, percentage}) => (
                <li className={s.statItem} key={id} style={{ backgroundColor: getRndColor() }}>
                    <span >{label}</span>
                            <span className={s.percentage}>{percentage}%</span>
                </li>))}
            </ul>

        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}

export default Statistics;

function getRndColor() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  }