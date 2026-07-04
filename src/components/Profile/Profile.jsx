import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ClothesSection from "../ClothesSection/ClothesSection";

function Profile({
  clothingItems,
  onCardClick,
  handleAddClick,
  onEditProfileClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="profile">
      <div className="profile__user">
        <div className="profile__avatar-container">
          {currentUser.avatar ? (
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="profile__avatar"
            />
          ) : (
            <div className="profile__avatar-placeholder">
              {currentUser.name?.[0]?.toUpperCase() || "?"}
            </div>
          )}
        </div>

        <div className="profile__info">
          <h2 className="profile__name">{currentUser.name}</h2>
          <button className="profile__edit-button" onClick={onEditProfileClick}>
            Edit profile
          </button>
        </div>
      </div>

      <ClothesSection
        clothingItems={clothingItems}
        onCardClick={onCardClick}
        handleAddClick={handleAddClick}
      />
    </section>
  );
}

export default Profile;
