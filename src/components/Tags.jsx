import React, {useEffect, useState} from 'react';
import './Tags.css';

function Tags() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {

        async function fetchData() {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch('https://spent-api-production.up.railway.app/api/v1/expense/tags');
                const data = await response.json();
                console.log(data)
                setData(data);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>An error occurred: {error.message}</p>;
    }
    if (data) {
        return (
            <div className={"Tags"}>
                <div><h1>Data:</h1> {data.map((data) =>
                    <p key={data}>{data}</p>)
                }</div>
            </div>
        );
    }
    return <p>No data</p>;
}

export default Tags;
