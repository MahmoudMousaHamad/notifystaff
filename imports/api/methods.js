import { Meteor } from "meteor/meteor";
import { Random } from "meteor/random";

import { Gyms } from "./gyms";
import { Tools } from "./tools";
import { Notifications } from "./notifications";

Meteor.methods({
    'gym.insert'(gym){
        gym._id = Random.id();
        Gyms.insert(gym);
        Meteor.users.update(this.userId, {
            $set: {
                gymID: gym._id,
            },
        });
    },

    'gym.update'(gym){
        const {name, street, city, province, zip, country, brandColor, ownerID, tools} = gym.modifier.$set;
        Gyms.update(gym._id, {name, street, city, province, zip, country, brandColor, ownerID, tools});
    },

    'gym.remove'(gym){
        Gyms.remove(gym._id);
    },

    'tool.insert'(tool){
        Tools.insert(tool);
    },

    'tool.update'(tool){
        const {type, toolNumber, location, gymID, notifications} = tool.modifier.$set;
        Tools.update(tool._id, {type, toolNumber, location, gymID, notifications});
    },

    'tool.remove'(tool){
        Tools.remove(tool._id);
    },

    'notification.insert'(notification){
        Notifications.insert(notification);
    },

    'notification.update'(notification){
        const {notifierFN, notifierLN, comment, read, toolID, done} = gym.modifier.$set;
        Notifications.update(notification._id, {notifierFN, notifierLN, comment, read, toolID, done});
    },

    'notification.remove'(notification){
        Notifications.remove(notification._id);
    },

})