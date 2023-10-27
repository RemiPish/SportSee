import React from 'react';
import './UserInfo.scss';
import calories from '../../assets/calories.png';
import fat from '../../assets/fat.png';
import carbs from '../../assets/carbs.png';
import protein from '../../assets/protein.png';


export default function UserInfo({ type, value }) {

    function getImage(type) {
        // eslint-disable-next-line default-case
        switch (type) {
            case 'calories':
                return calories;
            case 'fat':
                return fat;
            case 'carbs':
                return carbs;
            case 'protein':
                return protein;
        }
    }

    function getName(type) {
        // eslint-disable-next-line default-case
        switch (type) {
            case 'calories':
                return 'Calories';
            case 'fat':
                return 'Lipids';
            case 'carbs':
                return 'Glucides';
            case 'protein':
                return 'Proteins';
        }
    }

    function getMesurement() {
        // eslint-disable-next-line default-case
        switch (type) {
            case 'calories':
                return 'kCal';
            case 'fat':
                return 'g';
            case 'carbs':
                return 'g';
            case 'protein':
                return 'g';
        }
    }
    return <div className="card">
        <div>
            <img className="icon" src={getImage(type)} alt={type} />
        </div>
        <div className="numbers">
            <div className="infoValue">{value} {getMesurement()}</div>
            <div className="infoName">{getName(type)}</div>
        </div>

    </div>
}