import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../nav/NavBar";


const Root = () => {
    return (
        <div>
            <div className="sticky top-0">
                <NavBar></NavBar>
            </div>


            <div>
                <Outlet>

                    {/* All the changes will be held here. */}

                </Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;