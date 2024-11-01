

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-indigo-950 text-primary-content p-10">
                <aside>
                    <img src="https://img.icons8.com/nolan/64/books-1.png" alt="" />
                    <p className="font-bold">
                        Boi Poka Literature Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSplFezY7XVSlWF6UtDyt3U83lKOxvvTVhw9A&s" className="w-48 rounded-full" />
                </nav>
            </footer>
        </div>
    );
};

export default Footer;