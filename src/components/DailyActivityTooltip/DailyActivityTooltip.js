import React from 'react';
import './DailyActivityTooltip.scss';
import PropTypes from 'prop-types';


export default function DailyActivityTooltip({ active, payload }) {
    if (active) {
        return (
            <div className="tooltip-container">
                <div className="payload">{payload[0].value}kg</div>
                <div className="payload">{payload[1].value}Kcal</div>
            </div>
        );
    }
    return ;
}

DailyActivityTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
};