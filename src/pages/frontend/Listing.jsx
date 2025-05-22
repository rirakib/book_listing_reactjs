import { useEffect } from "react"
import { useListingContext } from "../../contexts/ListingContext"
import FrontendLayout from "../../layouts/FrontendLayout"
import ListingCard from "../../components/ListingCard";

const Listing = () => {

    const { data, loading, error, fetchListing } = useListingContext();

    useEffect(() => {
        fetchListing();
    }, []);

    return (
        <FrontendLayout>
            <div className="container">
                <h1>Listing Page</h1>
                {loading && <p>Loading...</p>}
                {error && <p className="text-danger">Error: {error}</p>}
                {data && data.length > 0 ? (
                    <div className="row">
                        {data.map((item,key) => (
                        
                            <div className="col-md-4">
                                <ListingCard data={item} key={key} />
                            </div>
                        ))}
                    </div>
                ) : (
                    !loading && <p>No listings found</p>
                )}
            </div>
        </FrontendLayout>
    )
}

export default Listing