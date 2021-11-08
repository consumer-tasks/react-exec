import React from 'react';
import PropTypes from 'prop-types';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import './AnimalCard.css';

const AnimalCard = ({
    diet,
    name,
    size
}) => {
    return (
        <div className='animal-wrapper'>
            <h2>{name}</h2>
            <div>{size}kg</div>
            <AnimalDetails 
                diet={diet}
            />
        </div>
    );
}

AnimalCard.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
}

AnimalCard.defaultProps = {
    additional: {
        notes: 'No Additonal Information'
    }
}

export default AnimalCard;