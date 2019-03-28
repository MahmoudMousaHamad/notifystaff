import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";

SimpleSchema.extendOptions(['autoforms']);

export const Notifications = new Mongo.Collection('notification');

var NotificationSchema = new SimpleSchema({

    notifierFN:{
        type: String,
    },

    notifierLN:{
        type: String,
    },

    comment:{
        type: String,
    },

    read: {
        type: Boolean,
    },

    done: {
        type: Boolean
    },

    createdAt:{
        type: Date,
        autoform:{
            type: 'hidden',
            label: false,
        },
        defaultValue: new Date(),
    },

});

Notifications.attachSchema(NotificationSchema);
