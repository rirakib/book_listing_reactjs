import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {

    const location = useLocation();

    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <section id="banner" className=" text-center py-5 bg-dark">
            <div className="container">
                <nav aria-label="breadcrumb" className="my-3">
                    <ol className="breadcrumb text-white">
                        <li className="breadcrumb-item">
                            <Link to="/" className="text-white">Home</Link>
                        </li>
                        {pathnames.map((name, index) => {

                            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathnames.length - 1;
                            return (
                                <li
                                    className={`breadcrumb-item ${isLast ? 'active' : ''} text-white`}
                                    key={name}
                                    aria-current={isLast ? 'page' : undefined}
                                >
                                    {isLast ? (
                                        decodeURIComponent(name)
                                    ) : (
                                        <Link to={routeTo} className="text-white">{decodeURIComponent(name)}</Link>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </section>
    );
};

export default Breadcrumb;