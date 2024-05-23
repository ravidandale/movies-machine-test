import React from 'react';

const CastList = ({ cast }) => {
  return (
    <div className="cast-list">
      <h3>Cast</h3>
      <ul>
        {cast.map((member) => (
          <li key={member.cast_id} className="cast-member">
            <img
              src={member.profile_path ? `https://image.tmdb.org/t/p/w200${member.profile_path}` : 'https://via.placeholder.com/200x300'}
              alt={member.name}
              className="cast-member-photo"
            />
            <div className="cast-member-info">
              <p><strong>{member.name}</strong></p>
              <p>{member.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastList;
