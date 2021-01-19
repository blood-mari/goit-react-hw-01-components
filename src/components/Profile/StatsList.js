import PropTypes from 'prop-types';
import s from './StatsList.module.css'

function StatsList({ list }) {
    const arrayStats = [];

    for (let item in list) {

        if (list[item] >= 1000) {
            let replaceSymbol = list[item] / 1000;
            list[item] = replaceSymbol.toString().replace(/\./, ',');
        }
        arrayStats.push({ label: item, quantity: list[item] });
    }

    return (
        <ul className={s.stats}>
            {arrayStats.map((item, index) => (
                <li className={s.statsItem} key={item.label + index}>
                    <span className={s.label}>{item.label }</span>
                    <span className={s.quantity}>{item.quantity}</span>
                </li>))}
        </ul>
    );
}

StatsList.propTypes = {
    list: PropTypes.object,
    arrayStats: PropTypes.shape({
        label: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
    }
    )
}

export default StatsList;