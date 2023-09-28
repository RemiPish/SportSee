import React from 'react';
import './Score.scss';
import FetchData from "../../services/FetchData";
import { Pie, PieChart, ResponsiveContainer, Cell } from 'recharts';

export default function Score({ userId }) {

    const { data: userData, loading: isLoading, error: isError } = FetchData('infoUser', userId);
    let score, data;
    if (!isLoading && !isError) {
        score = userData.todayScore || userData.score || 0;
        data = [{ value: score }, { value: 1 - score }];
    }


    return (
        <div >
            {!isLoading ? (
                <div className='score-container'>
                    <div className="daily-chart-header">
                        <div className="daily-title">Score</div>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie startAngle={180}
                                endAngle={0}
                                innerRadius={80}
                                outerRadius={90}
                                data={data}
                                dataKey="value"
                                isAnimationActive={false}
                                cy={"70%"}>
                                <Cell fill="#FF0000" />
                                <Cell fill="#FBFBFB" />
                            </Pie>

                        </PieChart>
                    </ResponsiveContainer>
                    <div className='score-label'>
                        <div className='score-number'>
                            {score * 100}%<br />
                        </div>
                        <div className='score-txt'>
                            de votre objectif
                        </div>

                    </div>
                </div>

            ) : (<div>LOADING!</div>)
            }
        </div>)
}