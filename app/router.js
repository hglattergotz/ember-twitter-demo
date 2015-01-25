import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('tweets', { path: '/tweets' });
    this.resource('settings', { path: '/settings' }, function() {
        this.route('edit');
    });
});

export default Router;
