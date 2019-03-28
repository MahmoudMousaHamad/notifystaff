import { Meteor } from 'meteor/meteor';
import _ from "lodash";
import faker from "faker";

import { Gyms } from "../imports/api/gyms.js";
import { Tools } from "../imports/api/tools.js";
import { Notifications } from "../imports/api/notifications.js";

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

  const notificationIDs = new Array();
  const toolIDs = new Array();

  const numberGyms = Gyms.find().count();
  var gymsCounter = 0;
  if (!numberGyms){
    _.times(20, () => {
      const name = faker.company.companyName();
      const street = faker.address.streetName();
      const city = faker.address.city();
      const province = faker.address.state();
      const zip = faker.address.zipCode();
      const country = faker.address.country();
      var tools = new Array();
      for(i = 0; i < 20; i++){
        tools[i] = toolIDs[gymsCounter * 20 + i];
      }
      const brandColor = faker.internet.color();

      Gyms.insert({
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

      gymsCounter++;
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

      const _id = faker.random.uuid();
      notificationIDs.push(_id);

      Notifications.insert({
        _id,
        notifierFN,
        notifierLN,
        comment,
        read,
        done,
        createdAt: new Date(),
      });
    });
  }

  const numberTools = Tools.find().count();
  var toolsCounter = 0;
  if (!numberTools){
    _.times(400, () => {
      const type = faker.commerce.productName();
      const toolNumber = faker.random.number(40);
      const location = faker.random.words(4);
      var notifications = new Array();
      for(i = 0; i < 20; i++){
        notifications[i] = notificationIDs[toolsCounter * 20 + i]
      }

      const _id = faker.random.uuid();
      toolIDs.push(_id);

      Tools.insert({
        _id,
        type,
        toolNumber,
        location,
        notifications,
        createdAt: new Date(),
      });

      toolsCounter++;
    });
  }

});
