import { useEffect, useState } from 'react';
import axios from 'axios';

export default function FetchData(service, userID) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "http://localhost:3000"
                const data = await axios.get(url + getEndpoint(service, userID)).then((response) => {
                    return response.data;
                });
                setData(data.data);
            } catch (error) {
                console.error(error);
                setError(true);
            }
            setLoading(false);
        };

        fetchData();
    }, [service, userID]);

    function getEndpoint(service, userID) {
        switch (service) {
            case 'infoUser':
                return `/user/${userID}`;
            case 'dailyActivity':
                return `/user/${userID}/activity`;
            case 'averageSessions':
                return `/user/${userID}/average-sessions`;
            case 'performance':
                return `/user/${userID}/performance`;
            default:
                return;
        }
    }

    return { data, loading, error }
}