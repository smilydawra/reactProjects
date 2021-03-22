import React from 'react'
import MapView from './MapView';

const Card = ({ location }) => {
    const kicks = location.kicks;
    // console.log(kicks)
    return (
        <>
            <div class="card my-2" style={{ width: "70%" }}>
                <img class="card-img-top" style={{ width: "18rem" }} src={location.logo} alt={location.name} />
                <div class="card-body">
                    <p class="card-text">
                        <p><strong>Name:</strong> {location.name}</p>
                        <p><strong>Kicks:</strong>
                            <ul>
                                <li>Walk-In: {kicks.walk_in}</li>
                                <li>Scan: {kicks.scan}</li>
                                <li>Receipt: {kicks.receipt}</li>
                            </ul>
                        </p>
                    </p>
                </div>
                <MapView lat={location.latitude} lng={location.longitude} />
            </div>
        </>
    )
}

export default Card
