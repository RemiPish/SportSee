import React from 'react';
import './UserInfoContainer.scss';
import FetchData from "../../services/FetchData";
import UserInfo from "../UserInfo/UserInfo";

export default function UserInfoContainer({ userId }) {

    //recupere les infos de l'utilisateur avec FetchData et userId recupéré
    const { data: userData, loading: isLoading, error: isError } = FetchData('infoUser', userId);

    let keyData;
    if (!isLoading && !isError) {
        keyData = userData.keyData;
    }

    return (
        <div >
            {!isLoading ? (
                <div className='userInfo-container'>
                    <UserInfo type="calories" value={keyData.calorieCount} />
                    <UserInfo type="carbs" value={keyData.carbohydrateCount} />
                    <UserInfo type="fat" value={keyData.lipidCount} />
                    <UserInfo type="protein" value={keyData.proteinCount} />
                </div>

            ) : (<div>LOADING!</div>)
            }
        </div>)
}