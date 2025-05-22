import { Link } from "react-router-dom"
import UserLayout from "../../../layouts/UserLayout"

const ListingIndex = () => {


    return (
        <UserLayout>
            <div className="card shadow-sm rounded-3">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Listing Title</h5>
                    <Link to="/listing/create" className="btn btn-primary">
                        <i className="bi bi-plus-circle me-1"></i> Add New
                    </Link>
                </div>


                <div className="card-body p-0">
                    <table className="table table-hover mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Example row */}
                            <tr>
                                <td>1</td>
                                <td>Example Item</td>
                                <td><span className="badge bg-success">Active</span></td>
                                <td>
                                    <button className="btn btn-sm btn-outline-secondary">Edit</button>
                                </td>
                            </tr>
                
                        </tbody>
                    </table>
                </div>

                <div className="card-footer d-flex justify-content-center">
                    <nav>
                        <ul className="pagination mb-0">
                            <li className="page-item disabled"><button className="page-link">Previous</button></li>
                            <li className="page-item active"><button className="page-link">1</button></li>
                            <li className="page-item"><button className="page-link">2</button></li>
                            <li className="page-item"><button className="page-link">3</button></li>
                            <li className="page-item"><button className="page-link">Next</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </UserLayout>
    )
}

export default ListingIndex