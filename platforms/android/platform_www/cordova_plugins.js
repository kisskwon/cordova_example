cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-calendar.Calendar",
      "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
      "pluginId": "cordova-plugin-calendar",
      "clobbers": [
        "Calendar"
      ]
    },
    {
      "id": "cordova-plugin-syncup.Syncup",
      "file": "plugins/cordova-plugin-syncup/www/Syncup.js",
      "pluginId": "cordova-plugin-syncup",
      "clobbers": [
        "cordova.plugins.Syncup"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-calendar": "5.1.6",
    "cordova-plugin-syncup": "0.0.1"
  };
});