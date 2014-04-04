if (Meteor.isServer) {
  var bob = Meteor.users.findOne({"emails.address": "bob@example.com"});
  var bobId = bob ? bob._id : Accounts.createUser({
    email: "bob@example.com",
    password: "foobaz"
  });
  Meteor.users.update(bobId, {$set: {'emails.0.verified': true}});

  Meteor.startup(function () {
    Accounts.sendVerificationEmail(bobId || bob._id);
  });
}
