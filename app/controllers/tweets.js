import Ember from 'ember';

export default Ember.ArrayController.extend({
    sortProperties: ['id'],
    sortAscending: false,
    actions: {
        onopen: function(socketEvent) {
            console.log('On open has been called! type = ' + socketEvent.type);
        },
        onmessage: function(socketEvent) {
            var tweet = JSON.parse(socketEvent.data);
            console.log('Got tweet from ' + tweet.author);
            this.store.push('tweet', tweet);
        },
        onclose: function(socketEvent) {
            console.log('On close has been called! type = ' + socketEvent.type);
        },
        onerror: function(socketEvent) {
            console.log('On error has been called! :-( type = ' + socketEvent.type);
        }
    }
});
