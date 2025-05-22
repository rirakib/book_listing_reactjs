import { useEffect, useState } from "react";
import useDistance from "../hooks/useDistance";

const ListingCard = ({ data }) => {

    const [distance, setDistance] = useState(null);

    useEffect(() => {
        if ("geolocation" in navigator && data.latitude && data.longitude) {

            navigator.geolocation.getCurrentPosition((position)=>{
                const userLat = position.coords.latitude
                const userLon = position.coords.longitude
                
                const dist = useDistance(userLat,userLon,data.latitude,data.longitude)
                setDistance(dist)
            })
        }

    }, [data.latitude, data.longitude])

    return (
        <div className="card mb-4 shadow-sm" style={{ maxWidth: "100%" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={data.image_with_url}
                        className="img-fluid rounded-start h-100"
                        style={{ objectFit: "cover" }}
                        alt="Thumbnail"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body d-flex flex-column justify-content-between h-100">
                        <div>
                            <h5 className="card-title mb-2">{data.title}</h5>
                            <p className="card-text text-primary fw-bold fs-5">
                                ${parseFloat(data.price).toFixed(2)}
                            </p>
                            <p className="card-text mb-1">
                                <strong>Author:</strong> {data.author}
                            </p>
                            <p className="card-text mb-1">
                                <strong>Address:</strong> {data.address}
                            </p>
                            <p className="card-text">
                                <small className="text-muted">
                                    Nearby:{" "}
                                    {distance !== null
                                        ? distance < 1
                                            ? `${(distance * 1000).toFixed(0)} meters`
                                            : `${distance.toFixed(2)} km`
                                        : "Calculating..."}
                                </small>
                            </p>
                        </div>
                        <div className="mt-3">
                            <a href="#" className="btn btn-outline-primary">
                                View Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
