Router.route('/', function() {
    this.layout('layout');
    this.render('main');
});

Router.route('/newNotifications', function() {
    this.layout('layout');
    this.render('newNotifications');
});

Router.route('/gyms', function(){
    this.layout('layout');
    this.render('gyms');
});