import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../nav/NavBar";


const Root = () => {
    return (
        <div className="md:grid grid-cols-5 gap-2">
            <div className="sticky top-0 md:col-span-1">
                <NavBar></NavBar>
            </div>

            <div className="md:col-span-4">
                <div>
                    <Outlet>

                        {/* All the changes will be held here. */}

                    </Outlet>
                </div>
                <div>
                    <Footer></Footer>
                </div>

            </div>

        </div>
    );
};

export default Root;