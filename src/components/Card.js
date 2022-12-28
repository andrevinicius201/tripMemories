export default function Card(props){

    let stars = []
    let ratingCount = props.rating
    for (let i = 0; i < ratingCount; i++) {
        stars.push(<img key={i} className="star" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png"/>)
    }
   
    return (
        <div>
            <section className="places">
                <img className="card" src={props.img}/> 
                <div className="card--info">                        
                    <span className="location"> <img className="pin" src="https://cdn.iconscout.com/icon/free/png-256/map-pin-1452950-1227762.png"/> {props.location} <span id="mapsLink"> Ver no Google Maps </span> </span> 
            
                    <h2 className="locationInfo"> {props.placeName} </h2>
                    <h3 className="date"> {props.date} </h3>
                    {stars}
                    <p className="visitDescription"> {props.visitDescription} </p>
                </div>
            
            </section>
            <div className="bar">
                <hr className="bar--bar"></hr>
            </div>
            
        </div>
        
    )
}