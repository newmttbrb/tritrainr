var workoutData = [
  {
    title: "sample1",
    time:  "32m"
  },
  {
    title: "sample2",
    time:  "33m"
  },
  {
    title: "sample3",
    time:  "34m"
  }
];

Template.workoutList.helpers({
  workouts: workoutData
});
