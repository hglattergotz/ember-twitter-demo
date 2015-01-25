import Ember from 'ember';

export function dateAgo(dateStr) {
    var hintStr    = "",
        displayStr = "";

    if (null === dateStr) {
        hintStr    = "The date is null";
        displayStr = "unknown";
    } else {
        hintStr = moment(new Date(dateStr)).format("YYYY-MM-DD hh:mm:ss");
        displayStr = moment(new Date(dateStr)).fromNow();
    }

    var result = "<time title=\"" + hintStr + "\">" + displayStr + "</time>";

    return new Ember.Handlebars.SafeString(result);
}

export default Ember.Handlebars.makeBoundHelper(dateAgo);
