import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import { Tools } from "../api/tools";
import { Notifications } from "../api/notifications";

import './body.html';
import './notifications.html';
import './tools.html';
import './navigation.html';
import './main.html';
import './newNotifications.html';
    
AutoForm.setDefaultTemplate('materialize');

window.Tools = Tools;
window.Notifications = Notifications;

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

Template.newNotifications.helpers({
    newNotifications(){
        return Notifications.find({
            read: false,
        });
    }
});

Template.notification.helpers({
    makeUniqueID(){
        return this._id;
    },

    returnToolNumber(toolID){
        const tool = Tools.findOne({_id: toolID});
        return tool.toolNumber;
    },

    returnToolType(toolID){
        const tool = Tools.findOne({_id: toolID});
        return tool.type;
    },

    returnToolLocation(toolID){
        const tool = Tools.findOne({_id: toolID});
        return tool.location;
    },
});

Template.newNotification.helpers({
    makeUniqueID(){
        return this._id;
    },

    returnToolNumber(toolID){
        const tool = Tools.findOne({_id: toolID});
        return tool.toolNumber;
    },

    returnToolType(toolID){
        const tool = Tools.findOne({_id: toolID});
        return tool.type;
    },

    returnToolLocation(toolID){
        const tool = Tools.findOne({_id: toolID});
        return tool.location;
    },
});

Template.tools.onRendered(function(){
    $('#modal1').modal();
});


Template.notifications.onRendered(function(){
    $('#modalInsertNotification').modal();
    $('.collapsible').collapsible();
    $('select').css({'display': 'block', 'margin-top': '50px'});
});

Template.newNotifications.onRendered(function(){
    $('.collapsible').collapsible();
});

Router.route('/', function() {
    this.layout('layout');
    this.render('main');
});

Router.route('/newNotifications', function() {
    this.layout('layout');
    this.render('newNotifications');
});

