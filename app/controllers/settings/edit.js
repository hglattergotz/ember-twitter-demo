import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        editSave: function() {
            var that = this;

            if (this.get('model').get('isDirty')) {
                console.log('model is dirty saving settings');
                this.get('model').save().then(function() {
                    that.get('store').findAll('tweet').then(function(items) {
                        items.toArray().forEach(function(item){
                            item.unloadRecord();
                        });
                    });
                    that.transitionToRoute('settings');
                });
            } else {
                console.log('model NOT dirty');
                that.transitionToRoute('settings');
            }
        },
        editCancel: function () {
            this.get('model').rollback();
            this.transitionToRoute('settings');
        }
    }
});
