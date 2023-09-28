import React from 'react';
import './DailyActivity.scss';
import FetchData from "../../services/FetchData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import DailyActivityTooltip from '../DailyActivityTooltip/DailyActivityTooltip';

export default function DailyActivity({ userId }) {

    const { data: activityData, loading: isLoading, error: isError } = FetchData('dailyActivity', userId);
    let dailyActivity = [];
    let keyData;
    if (!isLoading && !isError) {
        keyData = activityData.sessions;
        dailyActivity = getDailyActivityArray(keyData);
    }


    function getDailyActivityArray(keyData) {
        let dailyActivityArray = [];
        for (let i = 0; i < keyData.length; i++) {
            dailyActivityArray.push({
                day: keyData[i].day,
                kilogram: keyData[i].kilogram,
                calories: keyData[i].calories
            })
        }
        return dailyActivityArray.map(item => {
            const [, month, day] = item.day.split('-');
            const formattedDate = `${parseInt(day)}/${parseInt(month)}`;
            return {
                ...item,
                day: formattedDate
            };
        }).sort((a, b) => {
            const dateA = new Date(`${a.day}`);
            const dateB = new Date(`${b.day}`);
            return dateA - dateB;
        });
    }

    return (
        <div className='dailyActivity'>
            {!isLoading ? (
                <div className='dailyActivity-container'>
                    <div className="daily-chart-header">
                        <div className="daily-title">Activité quotidienne</div>
                        <div className="daily-legend-container">
                            <div className="daily-legend-item">
                                <span className="dot dot-black"></span>
                                Poids (kg)
                            </div>
                            <div className="daily-legend-item">
                                <span className="dot dot-red"></span>
                                Calories brûlées (kCal)
                            </div>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            data={dailyActivity}
                            barGap={8}
                            barCategoryGap="30%"
                        >
                            <CartesianGrid
                                strokeDasharray="5 5"
                                vertical={false}
                                stroke="#DEDEDE"
                            />
                            <XAxis
                                dataKey="day"
                                tickLine={false}
                                stroke="#9B9EAC"
                            />
                            <YAxis
                                yAxisId="kg"
                                dataKey="kilogram"
                                domain={["dataMin - 1", "dataMax + 5"]}
                                dx={10}
                                orientation="right"
                                allowDecimals={false}
                                axisLine={false}
                                tickLine={false}
                                stroke="#9B9EAC"
                            />
                            <YAxis
                                yAxisId="cal"
                                dataKey="calories"
                                domain={[0, "dataMax + 50"]}
                                hide={true}
                            />
                            <Tooltip content={<DailyActivityTooltip />} />
                            <Bar
                                yAxisId="kg"
                                dataKey="kilogram"
                                maxBarSize={8}
                                fill="#282D30"
                                radius={[50, 50, 0, 0]}
                            />
                            <Bar
                                yAxisId="cal"
                                dataKey="calories"
                                maxBarSize={8}
                                fill="#E60000"
                                radius={[50, 50, 0, 0]}
                            />

                        </BarChart>

                    </ResponsiveContainer>
                </div>

            ) : (<div>LOADING!</div>)
            }
        </div>)
}