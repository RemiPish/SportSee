import React from 'react';
import './AverageSessionDuration.scss';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import FetchData from "../../services/FetchData";
import AverageSessionTooltip from "../AverageSessionTooltip/AverageSessionTooltip";


export default function UserAverageSessions({ userId }) {
    let sessions;
    const { data: sessionData, loading: isLoading, error: isError } = FetchData('averageSessions', userId);
    if (!isLoading && !isError) {
        sessions = sessionData.sessions.map((data) => {

            switch (data.day) {
                case 1:
                    return { ...data, day: "L" };
                case 2:
                    return { ...data, day: "M" };
                case 3:
                    return { ...data, day: "M" };
                case 4:
                    return { ...data, day: "J" };
                case 5:
                    return { ...data, day: "V" };
                case 6:
                    return { ...data, day: "S" };
                case 7:
                    return { ...data, day: "D" };
                default:
                    return { ...data };
            }
        });
    }

    return (
        <div >
            {!isLoading ? (
                <div className='averagesession-container'>
                    <div className="daily-chart-header">
                        <div className="averagesession-title">Durée moyenne des sessions</div>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={sessions}
                            strokeWidth={1}
                        >
                            <XAxis
                                type="category"
                                dataKey="day"
                                tickLine={true}
                                stroke="red"
                                padding={{ right: 5, left: 5 }}
                                tick={{ fontSize: 13, stroke: "white", opacity: 0.8 }}
                            />
                            <YAxis
                                dataKey="sessionLength"
                                domain={[0, "dataMax + 30"]}
                                hide={true}
                            />
                            <Tooltip content={<AverageSessionTooltip />} />
                            <Line
                                type="monotone"
                                dataKey="sessionLength"
                                stroke="#D8D8D8"
                                strokeWidth={2}
                                dot={false}
                                activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

            ) : (<div>LOADING!</div>)
            }
        </div>)
}