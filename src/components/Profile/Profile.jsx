import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile({ clothingItems, onCardClick, handleAddClick }) {
  const currentUser = useContext(CurrentUserContext);

  const handleEditProfileClick = () => {
    
  };

  return (
    <section className="profile">
      <div className="profile__user">
        <div className="profile__avatar-container">
          {currentUser.avatar ? (
            <img src={currentUser.avatar} alt={currentUser.name} className="profile__avatar" />
          ) : (
            <div className="profile__avatar-placeholder">
              {currentUser.name?.[0]?.toUpperCase() || "?"}
            </div>
          )}
        </div>

        <div className="profile__info">
          <h2 className="profile__name">{currentUser.name}</h2>
          <button 
            className="profile__edit-button" 
            onClick={handleEditProfileClick}
          >
            Edit profile
          </button>
        </div>
      </div>

      {/* ClothesSection */}
      <ClothesSection 
        clothingItems={clothingItems}
        onCardClick={onCardClick}
        handleAddClick={handleAddClick}
      />
    </section>
  );
}
