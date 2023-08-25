import React from 'react';
import './Dashboard.scss';
import UserInfoContainer from '../../components/UserInfoContainer/UserInfoContainer';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import { useParams } from "react-router";
import Score from '../../components/Score/Score';
import FetchData from "../../services/FetchData";
import AverageSessionDuration from '../../components/AverageSessionDuration/AverageSessionDuration';
import Performance from '../../components/Performance/Performance';

export default function Dashboard() {
    let { userId } = useParams();

    const { data: userData, loading: isLoading, error: isError } = FetchData('infoUser', userId);



    return (
        <div >
            {isError ? (
                <p>Error loading data.</p>
            ) : (
                <div className="page">
                    <h1 className="title">Bonjour <span className="name">{!isLoading && userData.userInfos.firstName}</span> !</h1>
                    <div className="title-txt">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
                    <div className="content">
                        <div className="left-side-content">
                            <div><DailyActivity userId={userId} /></div>

                            <div className="bottom-left-content">
                                <div>
                                    <AverageSessionDuration userId={userId} />
                                </div>
                                <div>
                                    <Performance userId={userId} />
                                </div>
                                <div>
                                    <Score userId={userId} />
                                </div>
                            </div>
                        </div>

                        <div>
                            <UserInfoContainer userId={userId} />
                        </div>

                    </div>
                </div>

            )
            }
        </div >
    );
}