"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _chalk() {
  const data = _interopRequireDefault(require("chalk"));

  _chalk = function () {
    return data;
  };

  return data;
}

function _fs() {
  const data = _interopRequireDefault(require("fs"));

  _fs = function () {
    return data;
  };

  return data;
}

function _path() {
  const data = _interopRequireDefault(require("path"));

  _path = function () {
    return data;
  };

  return data;
}

var _common = require("./common");

var _findProjectRoot = _interopRequireDefault(require("../../../tools/config/findProjectRoot"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getBuildToolsVersion = () => {
  // TODO use config
  const projectRoot = (0, _findProjectRoot.default)();

  const gradleBuildFilePath = _path().default.join(projectRoot, 'android/build.gradle');

  const buildToolsVersionEntry = 'buildToolsVersion';

  if (!_fs().default.existsSync(gradleBuildFilePath)) {
    return 'Not Found';
  } // Read the content of the `build.gradle` file


  const gradleBuildFile = _fs().default.readFileSync(gradleBuildFilePath, 'utf-8');

  const buildToolsVersionIndex = gradleBuildFile.indexOf(buildToolsVersionEntry);
  const buildToolsVersion = (gradleBuildFile // Get only the portion of the declaration of `buildToolsVersion`
  .substring(buildToolsVersionIndex).split('\n')[0] // Get only the the value of `buildToolsVersion`
  .match(/\d|\../g) || []).join('');
  return buildToolsVersion || 'Not Found';
};

const installMessage = `Read more about how to update Android SDK at ${_chalk().default.dim('https://developer.android.com/studio')}`;
var _default = {
  label: 'Android SDK',
  description: 'Required for building and installing your app on Android',
  getDiagnostics: async ({
    SDKs
  }) => {
    const requiredVersion = getBuildToolsVersion();
    const buildTools = typeof SDKs['Android SDK'] === 'string' ? SDKs['Android SDK'] : SDKs['Android SDK']['Build Tools'];
    const isAndroidSDKInstalled = Array.isArray(buildTools);
    const isRequiredVersionInstalled = isAndroidSDKInstalled ? buildTools.includes(requiredVersion) : false;
    return {
      versions: isAndroidSDKInstalled ? buildTools : SDKs['Android SDK'],
      versionRange: requiredVersion,
      needsToBeFixed: !isRequiredVersionInstalled
    };
  },
  runAutomaticFix: async ({
    loader,
    environmentInfo
  }) => {
    const version = environmentInfo.SDKs['Android SDK'];
    const isSDKInstalled = version !== 'Not Found';
    loader.fail();

    if (isSDKInstalled) {
      return (0, _common.logManualInstallation)({
        message: installMessage
      });
    }

    return (0, _common.logManualInstallation)({
      healthcheck: 'Android SDK',
      url: 'https://reactnative.dev/docs/getting-started'
    });
  }
};
exports.default = _default;

//# sourceMappingURL=androidSDK.js.map