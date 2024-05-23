import React from 'react';

const CastList = ({ cast }) => {
    return (
        <div>
            <h2>Cast </h2>
            <ul>
                {cast.map((member) => (
                    <li key={member.cast_id}>{member.name} as {member.character}</li>
                ))}
            </ul>
        </div>
    );
};

export default CastList;
