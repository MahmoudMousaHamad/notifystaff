import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import { Tools } from "../api/tools";
import { Notifications } from "../api/notifications";

import './body.html';
import './notifications.html';
import './tools.html';
    

Template.body.onCreated(function bodyOnCreated(){
    Meteor.subscribe("tools.allTools");
    Meteor.subscribe("notifications.allNotifications");
});

Template.registerHelper('formatDate', function(date){
    return moment(date).format('MMM Do YYYY');
});

Template.tools.helpers({
    tools(){
        return Tools.find();
    },
});

Template.notifications.helpers({
    notifications(){
        return Notifications.find();
    }
});