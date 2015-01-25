import Ember from 'ember';

export default Ember.Controller.extend({
    isEditing: false,
    actions: {
        edit: function() {
            console.log('edit button clicked');
            this.transitionToRoute('settings.edit');
        }
    }
});
