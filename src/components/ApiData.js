import React, {useEffect, useState} from 'react'
import axios from "axios";

const ApiData = () => {
    // const [apiData, setApiData] = useState([]);
    //
    // useEffect(() => {
    //     axios.get('http://localhost:9001/api/odds')
    //         .then(response => {
    //             setApiData(response.data); // Assuming your API returns an array of events
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);

    // const convertToAmericanOdds = (price) => {
    //     if (price > 2) {
    //         return Math.round((price - 1) * 100)
    //     } else if (price < 2) {
    //         return Math.round(-100 / price - 1)
    //     } else {
    //         return 0
    //     }
    // }

    return (
        <div>
            {/*<h2>Team Prices:</h2>*/}
            {/*{apiData.map(event => (*/}
            {/*    <div key={event.id}>*/}
            {/*        <h3>{event.away_team} vs. {event.home_team}</h3>*/}
            {/*        <ul>*/}
            {/*            {event.bookmakers[2].markets[0].outcomes.map(outcome => (*/}
            {/*                <li key={outcome.name}>*/}
            {/*                    /!*<p>{outcome.name}: {convertToAmericanOdds(outcome.price)}</p>*!/*/}
            {/*                    {outcome.name}: {outcome.price}*/}
            {/*                </li>*/}
            {/*            ))}*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
}

export default ApiData