import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";


export default function Profile() {
    return (
     <section className="profile">
        <Sidebar />
        <ClothesSection />
    </section>
    );
}