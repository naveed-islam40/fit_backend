const workoutData = [
    { 
      name: 'Above Head Chest', 
      target: 'Chest, Triceps', 
      sets: 3, 
      reps: 12, 
      duration: '30 minutes', 
      rest: '60 seconds', 
      img: 'https://gymvisual.com/img/p/2/1/7/4/7/21747.gif' 
    },
    { 
      name: 'Arm Crossover ', 
      target: 'Upper Chest, Shoulders', 
      sets: 4, 
      reps: 10, 
      duration: '25 minutes', 
      rest: '90 seconds', 
      img: 'https://gymvisual.com/img/p/2/3/7/9/3/23793.gif' 
    },
    {
  name: 'Wide Push-Up', 
  target: 'Chest, Shoulders, Triceps', 
  sets: 3, 
  reps: 15, 
  duration: '20 minutes', 
  rest: '60 seconds', 
  img: 'https://gymvisual.com/img/p/2/0/9/4/8/20948.gif' // Link to your local file
},
    { 
      name: 'Arm Circles', 
      target: 'Chest, Shoulders', 
      sets: 4, 
      reps: 12, 
      duration: '25 minutes', 
      rest: '60 seconds', 
      img: 'https://gymvisual.com/img/p/2/3/7/1/7/23717.gif' 
    },
    { 
      name: 'Alternate Punching', 
      target: 'Chest, Triceps', 
      sets: 3, 
      reps: 10, 
      duration: '15 minutes', 
      rest: '75 seconds', 
      img: 'https://gymvisual.com/img/p/1/6/8/7/9/16879.gif' 
    },
    { 
        name: 'Half Kneeling PVC Pec Mobilization', 
        target: 'Chest, Triceps', 
        sets: 3, 
        reps: 10, 
        duration: '15 minutes', 
        rest: '75 seconds', 
        img: 'https://gymvisual.com/img/p/1/2/6/5/5/12655.gif' 
      },
      { 
        name: 'Stick Shoulders Stretch', 
        target: 'Chest, Triceps', 
        sets: 3, 
        reps: 10, 
        duration: '15 minutes', 
        rest: '75 seconds', 
        img: 'https://gymvisual.com/img/p/2/3/2/9/6/23296.gif' 
      },
      { 
        name: 'Stick Pass Around Stretch', 
        target: 'Chest, Triceps', 
        sets: 3, 
        reps: 10, 
        duration: '15 minutes', 
        rest: '75 seconds', 
        img: 'https://gymvisual.com/img/p/2/3/3/0/2/23302.gif' 
      },
      { 
        name: 'Bent Side Knee Push up', 
        target: 'Chest, Triceps', 
        sets: 3, 
        reps: 10, 
        duration: '15 minutes', 
        rest: '75 seconds', 
        img: 'https://gymvisual.com/img/p/4/8/7/1/4871.gif' 
      }
   
  ];
  
  const getWorkouts = () => {
    return workoutData;
  };
  
  module.exports = { getWorkouts };
  