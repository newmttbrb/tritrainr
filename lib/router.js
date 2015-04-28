Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('workouts'); }
});

Router.route('/',{name: 'workoutList'});
Router.route('/workouts/:_id',{
  name: 'workoutPage',
  data: function() {
    return Workouts.findOne(this.params._id);
  }
});

Router.onBeforeAction('dataNotFound',{only: 'workoutPage'});
