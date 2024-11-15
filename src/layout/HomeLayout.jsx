import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavBar from "../components/layout-component/LeftNavBar";
import RightNavBAr from "../components/layout-component/RightNavBAr";
import NavBar from "../components/NavBar";
import CategoryNews from "../pages/CategoryNews";

const HomeLayout = () => {
    return (
        <div className="font-poppins">
           <header>
            <Header></Header>
            <section className="w-11/12 mx-auto">
                <LatestNews></LatestNews>
            </section>
           </header>
           <nav className="w-11/12 mx-auto py-5">
           <NavBar></NavBar>
           </nav>
           <main className="w-11/12 mx-auto grid lg:grid-cols-12 gap-3">
           <aside className="left col-span-3"><LeftNavBar></LeftNavBar></aside>
           <section className="col-span-6"><Outlet></Outlet></section>
           <aside className="right col-span-3"><RightNavBAr></RightNavBAr></aside>
           </main>
        </div>
    );
};

export default HomeLayout;