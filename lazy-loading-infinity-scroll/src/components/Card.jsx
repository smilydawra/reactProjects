import React from 'react'

const Card = ({ location }) => {
    const kicks = location.kicks;
    // console.log(kicks)
    return (
        <div class="card my-2" style={{ width: "18rem" }}>
            <img class="card-img-top" src={location.logo} alt="Card image cap" />
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
        </div>
    )
}

export default Card
