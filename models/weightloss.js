const weightLossWorkoutData = [
    { 
        name: 'Kneeling Back Rotation Stretch',
        target: 'Back, Core, Shoulders, Hip Flexors',
        sets: 3,
        reps: 10 ,
        duration: '10 minutes',
        rest: '30 seconds',
        img: 'https://gymvisual.com/img/p/2/1/5/7/0/21570.gif',
    },
    { 
        name: '3/4 Sit-Up',
        target: 'Waist, Core',
        sets: 4,
        reps: 15,
        duration: '10 minutes',
        rest: '45 seconds',
        img: 'https://gymvisual.com/img/p/1/1/6/3/8/11638.gif'
    },
    {
        name: '3-Leg Chaturanga Pose',
        target: 'Full Body, Core',
        sets: 3,
        reps: 10,
        duration: '10 minutes',
        rest: '60 seconds',
        img: 'https://gymvisual.com/img/p/2/6/3/0/5/26305.gif'
      },
      {
        name: '3-Leg Dog Pose',
        target: 'Full Body, Legs, Core',
        sets: 3,
        reps: 8,
        duration: '8 minutes',
        rest: '60 seconds',
        img: 'https://gymvisual.com/img/p/2/6/2/5/7/26257.gif'
      }
      
  ];
  
  const getWeightLossWorkouts = () => {
    return weightLossWorkoutData;
  };
  
  module.exports = { getWeightLossWorkouts };
  