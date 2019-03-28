import { Mongo } from "meteor/mongo";
import SimpleSchema from "simpl-schema";
SimpleSchema.extendOptions(['autoform', 'denyInsert', 'denyUpdate'])

export const Gyms = new Mongo.Collection('gyms');

var GymSchema = new SimpleSchema({

    name:{type: String,},

    street:{type: String,},

    city:{type: String,},

    province:{type: String,},

    zip:{type: String,},

    country:{type: String,},

    tools: {type: Array,},

    'tools.$': {type: String,},

    brandColor: {type: String,},

    createdAt:{
        type: Date,
        autoform:{
            type: 'hidden',
            label: false,
        },
        defaultValue: new Date(),
    },

});

Gyms.attachSchema(GymSchema);