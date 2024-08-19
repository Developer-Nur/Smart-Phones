import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <>
            <Header />
            <div className='w-full max-w-7xl mx-auto lg:px-10'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Root;