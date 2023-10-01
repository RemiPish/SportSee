import React from 'react';
import './AverageSessionTooltip.scss';
import PropTypes from 'prop-types';


export default function AverageSessionTooltip({ active, payload }) {
    //gere l'affichage du tooltip avec la valeur de AverageSession lorsque l'utilisateur hover sur le graphe
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