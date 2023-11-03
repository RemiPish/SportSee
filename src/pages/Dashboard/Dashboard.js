import React from 'react';
import './Dashboard.scss';
import UserInfoContainer from '../../components/UserInfoContainer/UserInfoContainer';
import DailyActivity from '../../components/DailyActivity/DailyActivity';
import { useParams } from "react-router";
import Score from '../../components/Score/Score';
import FetchData from "../../services/FetchData";
import AverageSessionDuration from '../../components/AverageSessionDuration/AverageSessionDuration';
import Performance from '../../components/Performance/Performance';

export default function Dashboard({isMock}) {
    //recupere le userId avec le param de l'url
    let { userId } = useParams();
   
    //recupere les infos de l'utilisateur avec FetchData et userId recupéré
    const { data: userData, loading: isLoading, error: isError } = FetchData('infoUser', userId, isMock);

    //on affiche les infos de l'utilisateur avec FetchData et userId: les charts avec DailyActivity, les scores avec Score et les infos nutrition avec UserInfoContainer
    return (
        <div >
            {(!isLoading && isError) ? (
                <div className="page">
                    <h1 className="title">NOUS SOMMES ACTUELLEMENT HORS LIGNE.</h1>
                    <a href="/">Retour à l'accueil</a>
                </div>
            ) : (!isLoading) ? (
                <div className="page">
                    <h1 className="title">Bonjour <span className="name">{!isLoading && userData.firstName}</span> !</h1>
                    <div className="title-txt">Félicitation ! Vous avez explosé vos objectifs hier 👏</div>
                    <div className="content">
                        <div className="left-side-content">
                            <div className="da-container"><DailyActivity userId={userId} isMock={isMock}/></div>

                            <div className="bottom-left-content">
                                <div className="bl-container">
                                    <AverageSessionDuration userId={userId} isMock={isMock}/>
                                </div>
                                <div className="bl-container">
                                    <Performance userId={userId} isMock={isMock}/>
                                </div>
                                <div className="bl-container">
                                    <Score userId={userId} isMock={isMock}/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <UserInfoContainer userId={userId} isMock={isMock} />
                        </div>

                    </div>
                </div>

            ) : (<div>LOADING...</div>)
            }
        </div >
    );
}