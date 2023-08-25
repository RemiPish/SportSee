import React from 'react';
import './AverageSessionTooltip.scss';
import PropTypes from 'prop-types';


export default function AverageSessionTooltip({ active, payload }) {
    if (active) {
        return (
            <div className="a-s-tooltip-container">
                <div className="a-s-payload">{payload[0].value}min</div>
            </div>
        );
    }
    return;
}

AverageSessionTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
};