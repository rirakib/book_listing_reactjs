const Banner = () => {
    return (
        <section id="banner" className="bg-dark text-white text-center py-5">
            <div className="container">
                <h1 className="display-4 fw-bold mb-3">Welcome to My Listing Page</h1>
                <p className="lead mb-4">Find the best listings that match your needs</p>

                <div className="row justify-content-center">
                    <div className="col-md-3 mb-2">
                        <select className="form-select">
                            <option value="">Select Category</option>
                            <option value="books">Books</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                        </select>
                    </div>
                    <div className="col-md-4 mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search by Title"
                        />
                    </div>
                    <div className="col-md-2 mb-2">
                        <button className="btn btn-light w-100">Search</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner