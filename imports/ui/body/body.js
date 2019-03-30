import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import { Tools } from "../../api/tools";
import { Notifications } from "../../api/notifications";

import '../partials/main';
import '../gyms/gyms';
import '../notifications/notifications';
import '../tools/tools';
import '../router';

import './body.html';
import '../partials/navigation.html';
import '../partials/main.html';
    
AutoForm.setDefaultTemplate('materialize');

window.Tools = Tools;
window.Notifications = Notifications;

Template.body.onCreated(function bodyOnCreated(){
    Meteor.subscribe("tools.allTools");
    Meteor.subscribe("notifications.allNotifications");
    Meteor.subscribe("gyms.allGyms");
});

Template.registerHelper('formatDate', function(date){
    return moment(date).format('MMM Do YYYY');
});