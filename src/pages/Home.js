import React, { useState } from 'react';
import { Box } from '@mui/material';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {

    const [bodypart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);

    return (
        <Box>
            <HeroBanner />
            <SearchExercises
                setExercises={setExercises}
                bodypart={bodypart}
                setBodyPart={setBodyPart}
            />
            <Exercises
                setExercises={setExercises}
                bodypart={bodypart}
                setBodyPart={setBodyPart} />
        </Box>
    )
}

export default Home;