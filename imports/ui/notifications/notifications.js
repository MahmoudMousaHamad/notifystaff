import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import { Tools } from "../../api/tools";
import { Notifications } from "../../api/notifications";

import '../notifications/notifications.html';
import '../notifications/newNotifications.html';

Template.notifications.onRendered(function(){
    $('#modalInsertNotification').modal();
    $('.collapsible').collapsible();
    $('select').css({'display': 'block', 'margin-top': '50px'});
});

Template.newNotifications.onRendered(function(){
    $('.collapsible').collapsible();
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