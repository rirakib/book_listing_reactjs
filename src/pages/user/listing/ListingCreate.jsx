import { Link } from "react-router-dom";
import UserLayout from "../../../layouts/UserLayout";
import MultiImageUpload from "../../../components/MultiImageUpload";

const ListingCreate = () => {

    return (
        <UserLayout>
            <div className="card shadow-sm rounded-3">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Create New Listing</h5>
                    <Link to="/listing/index" className="btn btn-secondary"><i className="bi bi-arrow-left me-1"></i> Back</Link>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row gy-3 mb-3">


                            <div className="col-md-6 form-group">
                                <label>I want to</label>
                                <select name="action_type" className="form-control" required>
                                    <option value="buy">Buy</option>
                                    <option value="sale">Sale</option>
                                </select>
                            </div>


                            <div className="col-md-6 form-group">
                                <label>Book Category</label>
                                <select name="book_category_id" className="form-control" required>
                                    <option value="a">AAA</option>
                                    <option value="a">AAA</option>
                                    <option value="a">AAA</option>
                                    <option value="a">AAA</option>
                                </select>
                            </div>

                            <div className="col-md-6 form-group">
                                <label>Title</label>
                                <input type="text" name="title" className="form-control" required />
                            </div>

                            <div className="col-md-6 form-group">
                                <label>Author</label>
                                <input type="text" name="author" className="form-control" required />
                            </div>

                            <div className="col-md-6 form-group">
                                <label>Last Published</label>
                                <input type="date" name="last_publication" className="form-control" required />
                            </div>

                            <div className="col-md-6 form-group">
                                <label>Price</label>
                                <input type="number" step="any" name="price" className="form-control" required />
                            </div>

                            <div className="col-md-6 form-group">
                                <label>Quantity</label>
                                <input type="number" step="any" name="price" className="form-control" required />
                            </div>


                            <div className="col-md-6 form-group">
                                <label>Cover Photo</label>
                                <input type="file" name="cover_photo" className="form-control" required />
                            </div>


                            
                            <MultiImageUpload label="Book Images" name="galleries" required={false} />
                        


                            <div className="col-md-12 form-group">
                                <label>Description</label>
                                <textarea name="description" className="form-control" id=""></textarea>
                            </div>


                        </div>


                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </UserLayout>
    );
};

export default ListingCreate;
