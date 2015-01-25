import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'li',
    classNameBindings: ['active','disabled'],
    active: function(){
        return this.get('childViews').anyBy('active');
    }.property('childViews.@each.active'),
    disabled: function(){
        return this.get('childViews').everyBy('disabled');
    }.property('childViews.@each.disabled')
});
