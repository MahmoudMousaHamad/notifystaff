import { Meteor } from 'meteor/meteor';
import _ from "lodash";
import faker from "faker";

import { Gyms } from "../imports/api/gyms.js";
import { Tools } from "../imports/api/tools.js";
import { Notifications } from "../imports/api/notifications.js";

import '../imports/api/methods';

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish("tools.allTools", () => {
    return Tools.find();
  });

  Meteor.publish("notifications.unreadNotifications", () => {
    return Notifications.find({
      read: false,
    });
  });

  Meteor.publish("notifications.unfixedNotifications", () => {
    return Notifications.find({
      fixed: false,
    });
  });

  Meteor.publish("notifications.allNotifications", () => {
    return Notifications.find();
  });

  Meteor.publish('gyms.allGyms', () => {
    return Gyms.find();
  });
});


Accounts.onCreateUser(function(options, user){
  user.gymID = "";

  if (options.profile) {
    user.profile = options.profile;
  }

  return user;
});