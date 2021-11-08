import React from 'react';
import PropTypes from 'prop-types';
import AnimalDetails from '../AnimalDetails/AnimalDetails';
import './AnimalCard.css';

const AnimalCard = ({
    name,
    size,
    ...props
}) => {
    return (
        <div className='animal-wrapper'>
            <h2>{name}</h2>
            <div>{size}kg</div>
            <AnimalDetails 
               {...props}
            />
        </div>
    );
}

AnimalCard.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
}

AnimalCard.defaultProps = {
    additional: {
        notes: 'No Additonal Information'
    }
}

export default AnimalCard;