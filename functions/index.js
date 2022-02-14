const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.onCreatedUser = require("./onCreatedUser");
exports.onDeletedUser = require("./onDeletedUser");
exports.userUpdates = require("./userUpdates");
exports.requests = require("./requests");
exports.images = require("./images");
exports.emailVerification = require("./emailVerification");
exports.onetimeFunctions = require("./onetimeFunctions");
exports.scheduled = require("./scheduled");
exports.feedback = require("./feedback");
exports.migrations = require("./migrations");



