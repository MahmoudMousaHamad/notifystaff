import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import { Tools } from "../../api/tools";

import '../tools/tools.html';

Template.tools.helpers({
    tools(){
        return Tools.find();
    },
});

Template.tools.onRendered(function(){
    $('#modal1').modal();
});

