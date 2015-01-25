import Ember from 'ember';
import socketMixin from 'ember-websockets/mixins/sockets';

export default Ember.Route.extend(socketMixin, {
    socketURL: 'ws://127.0.0.1:8001/ts',
    model: function() {
        return this.store.find('tweet');
    }
});
