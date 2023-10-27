import React from 'react';
import './UserInfoContainer.scss';
import FetchData from "../../services/FetchData";
import UserInfo from "../UserInfo/UserInfo";

export default function UserInfoContainer({ userId, isMock }) {

    const { data: userData, loading: isLoading, error: isError } = FetchData('infoUser', userId, isMock);


    return (
        <div >
            {(!isLoading || !isError || userData.keyData) ? (
                <div className='userInfo-container'>
                    <UserInfo type="calories" value={userData.keyData?.calorieCount} />
                    <UserInfo type="carbs" value={userData.keyData?.carbohydrateCount} />
                    <UserInfo type="fat" value={userData.keyData?.lipidCount} />
                    <UserInfo type="protein" value={userData.keyData?.proteinCount} />
                </div>

            ) : (!isLoading) ? (<div>LOADING!</div>) : (<div>ERROR!</div>)
            }
        </div>)
}