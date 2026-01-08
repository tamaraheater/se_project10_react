import "./Profile.css";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";


export default function Profile({ clothingItems, onCardClick, onAddClick }) {
    return (
     <section className="profile">
        <Sidebar />
        <ClothesSection 
          onCardClick={onCardClick}
          clothingItems={clothingItems}  
          onAddClick={onAddClick} 
        />
    </section>
    );
}