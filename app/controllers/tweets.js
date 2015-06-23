import Ember from 'ember';

export default Ember.Controller.extend({
  socketService: Ember.inject.service('websockets'),

  sortedTweets: function() {
    return Ember.ArrayProxy.createWithMixins(Ember.SortableMixin, {
      sortProperties: ['id'],
      sortAscending: false,
      content: this.get('model')
    });
  }.property('model'),

  init: function () {
    this._super.apply(this, arguments);

    var socket = this.get('socketService').socketFor('ws://127.0.0.1:8001/ts');

    socket.on('open', this.openHandler, this);
    socket.on('message', this.messageHandler, this);
    socket.on('close', this.closeHandler, this);
    socket.on('error', this.errorHandler, this);
  },

  openHandler: function(socketEvent) {
    console.log('On open has been called! type = ' + socketEvent.type);
  },

  closeHandler: function(socketEvent) {
    console.log('On close has been called! type = ' + socketEvent.type);
  },

  messageHandler: function(socketEvent) {
    var tweet = JSON.parse(socketEvent.data);
    console.log('Got tweet from ' + tweet.author);
    this.store.push('tweet', tweet);
  },

  errorHandler: function(socketEvent) {
    console.log('On error has been called! :-( type = ' + socketEvent.type);
  }
});
