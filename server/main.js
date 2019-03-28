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


  const numberGyms = Gyms.find().count();
  if (!numberGyms){
    _.times(20, () => {
      const name = faker.company.companyName();
      const street = faker.address.streetName();
      const city = faker.address.city();
      const province = faker.address.state();
      const zip = faker.address.zipCode();
      const country = faker.address.country();
      const brandColor = faker.internet.color();

      Meteor.call('gym.insert', {
        name,
        street,
        city,
        province,
        zip,
        country,
        tools,
        brandColor,
        createdAt: new Date(),
      });
    });
  }

  const numberNotifications = Notifications.find().count();
  if (!numberNotifications){
    _.times(400, () => {
      const notifierFN = faker.name.firstName();
      const notifierLN = faker.name.lastName(40);
      const comment = faker.random.words(10);
      const read = faker.random.boolean();
      const done = faker.random.boolean();
      const toolID = faker.random.uuid();

      Meteor.call('notification.insert', {
        notifierFN,
        notifierLN,
        comment,
        read,
        toolID,
        done,
        createdAt: new Date(),
      });
    });
  }

  const numberTools = Tools.find().count();
  if (!numberTools){
    _.times(400, () => {
      const type = faker.commerce.productName();
      const toolNumber = faker.random.number(40);
      const location = faker.random.words(4);
      var notifications = new Array();

      Meteor.call('tool.insert', {
        type,
        toolNumber,
        location,
        notifications,
        createdAt: new Date(),
      });
    });
  }

});
