const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div className="container">
                <small>&copy; {new Date().getFullYear()} MyBrand. All rights reserved.</small>
            </div>
        </footer>
    );
};

export default Footer;