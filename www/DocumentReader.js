var documentReader = {};

documentReader.initReader = function (license, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "DocumentReader", "initReader", [license]);
}

documentReader.scanDocument = function (successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "DocumentReader", "scanDocument");
}

documentReader.scenario = function (identifier) {
    cordova.exec(null, null, "DocumentReader", "scenario", [identifier]);
}

module.exports = documentReader;