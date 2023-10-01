import React from 'react';
import './Performance.scss';
import FetchData from "../../services/FetchData";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";

export default function Performance({ userId }) {

    let perf = [];
    //recupere les infos de l'utilisateur avec FetchData et userId recupéré
    const { data: performanceData, loading: isLoading, error: isError } = FetchData('performance', userId);
    if (!isLoading && !isError) {
        //on range les valeurs dans chaque catégorie pour les afficher dans le graphe
        perf = performanceData.data.map((data) => {
            switch (data.kind) {
                case 1:
                    return { ...data, kind: 'Cardio' };
                case 2:
                    return { ...data, kind: 'Energie' };
                case 3:
                    return { ...data, kind: 'Endurance' };
                case 4:
                    return { ...data, kind: 'Force' };
                case 5:
                    return { ...data, kind: 'Vitesse' };
                case 6:
                    return { ...data, kind: 'Intensité' };
                default:
                    return { ...data };
            }
        });
        console.log(perf);
    }


    return (
        <div >
            {!isLoading ? (
                <div className='performance-container'>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx='50%' cy='50%' outerRadius='65%' data={perf}>
                            <PolarGrid gridType="polygon" />
                            <PolarAngleAxis dataKey="kind" stroke='white' tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                            <Radar dataKey='value' stroke='#FF0101' fill='#FF0101' fillOpacity={0.7} />
                        </RadarChart>
                    </ResponsiveContainer>

                </div>

            ) : (<div>LOADING!</div>)
            }
        </div>)
}