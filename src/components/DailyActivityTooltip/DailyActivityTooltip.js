import React from 'react';
import './DailyActivityTooltip.scss';
import PropTypes from 'prop-types';


export default function DailyActivityTooltip({ active, payload }) {
    //gere l'affichage du tooltip avec les valeurs de DailyActivity lorsque l'utilisateur hover sur le graphe
    if (active && payload) {
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