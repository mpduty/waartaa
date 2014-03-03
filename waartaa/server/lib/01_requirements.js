if (Meteor.isServer) {
    try {
	   irc = Npm.require('irc');
    } catch (err) {
        irc = require('irc');
    }
    try {
        fs = Npm.require('fs');
    } catch (err) {
        fs = require('fs');
    }
    try {
	   Fiber = Npm.require('fibers');
    } catch (err) {
        Fiber = require('fibers');
    }
    try {
        CappedArray = Meteor.require('capped-array');
    } catch (err) {
        CappedArray = require('capped-array');
    }
    try {
        locks = Meteor.require('locks');
    } catch (err) {
        locks = require('locks');
    }
	crypto = Npm.require('crypto');
    Map = Meteor.require('collections/map');
    try {
        var privateKey = Assets.getText('certs/privatekey.pem');
        var certificate = Assets.getText('certs/certificate.pem');
        ssl_credentials = crypto.createCredentials({
            key: privateKey, cert: certificate});
        delete privatekey;
        delete certificate;
    } catch (err) {
        ssl_credentials = false;
    }
}
