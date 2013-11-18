if (Meteor.isServer) {
	irc = Npm.require('irc');
	Fiber = Npm.require('fibers');
	crypto = Npm.require('crypto');
    Dequeue = Npm.require('dequeue');
    events = Npm.require('events');
}
