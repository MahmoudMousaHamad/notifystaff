import { Mongo } from "meteor/mongo";
import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

export const Tools = new Mongo.Collection('tools');

var ToolSchema = new SimpleSchema({

    type:{
        type: String,
    },

    toolNumber:{
        type: String,
    },

    location: {
        type: String,
    },

    notifications: {
        type: Array,
    },

    'notifications.$':{
        type: String,
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

Tools.attachSchema(ToolSchema);
