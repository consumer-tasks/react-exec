const ADD_BIRD = 'ADD_BIRD';

export function addBird(bird) {
    return {
        type: ADD_BIRD,
        bird,
    }
}

const defaultBirds = [
    {
        name: 'Michael',
        views: 1,
    }
];

function birds(state=defaultBirds, action) {
    return state;
}