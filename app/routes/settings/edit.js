import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.find('setting', 1);
    },
    activate: function() {
        this.controllerFor('settings').set('isEditing', true);
    },
    deactivate: function() {
        this.controllerFor('settings').set('isEditing', false);
    }
});
