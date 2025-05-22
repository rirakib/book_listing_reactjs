const Listing = () => {
    return (
           <section id="listings" className="py-5 bg-light">
                <div className="container">
                    <h2 className="mb-4 text-center">Our Listings</h2>
                    <div className="row g-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="col-md-6 col-lg-3">
                                <div className="card h-100 shadow-sm">
                                    <img
                                        src={`https://picsum.photos/seed/book${item}/400/250`}
                                        className="card-img-top"
                                        alt={`Listing ${item}`}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title">Listing Title {item}</h5>
                                        <p className="card-text flex-grow-1">
                                            This is a short description of listing {item}. It’s clean, simple, and responsive.
                                        </p>
                                        <a href="#!" className="btn btn-primary mt-auto">Learn More</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
    )
}

export default Listing