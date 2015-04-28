Template.workoutList.helpers({
  workouts: function() {
    return Workouts.find();
  }
});
