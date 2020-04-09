"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.executeCommand = void 0;

function _execa() {
  const data = _interopRequireDefault(require("execa"));

  _execa = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Executes the given `command` on a shell taking care of slicing the parameters
 * if needed.
 */
const executeShellCommand = async command => {
  const args = command.split(' ');
  const program = args.shift();
  await (0, _execa().default)(program, args, {
    shell: true
  });
};

exports.executeCommand = executeShellCommand;

//# sourceMappingURL=executeWinCommand.js.map