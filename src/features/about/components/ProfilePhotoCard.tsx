import React from 'react';

export const ProfilePhotoCard: React.FC = () => {
  return (
    <div className="about-photo-card">
      <picture>
        <source srcSet="assets/img/profile.webp" type="image/webp" />
        <img
          src="assets/img/Perfil.png"
          alt="Filipe Nogueira da Silva - Portrait"
          className="about-photo"
          width={400}
          height={480}
          loading="lazy"
        />
      </picture>
    </div>
  );
};
