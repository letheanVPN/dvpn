"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ZshCompletionsCommand_cmd;
exports.__esModule = true;
exports.ZshCompletionsCommand = void 0;
var command_ts_1 = require("../command.ts");
var deps_ts_1 = require("../deps.ts");
var _zsh_completions_generator_ts_1 = require("./_zsh_completions_generator.ts");
var ZshCompletionsCommand = (function (_super) {
    __extends(ZshCompletionsCommand, _super);
    function ZshCompletionsCommand(cmd) {
        var _this = _super.call(this) || this;
        _ZshCompletionsCommand_cmd.set(_this, void 0);
        __classPrivateFieldSet(_this, _ZshCompletionsCommand_cmd, cmd, "f");
        _this.description(function () {
            var baseCmd = __classPrivateFieldGet(_this, _ZshCompletionsCommand_cmd, "f") || _this.getMainCommand();
            return "Generate shell completions for zsh.\n\nTo enable zsh completions for this program add following line to your ".concat((0, deps_ts_1.dim)((0, deps_ts_1.italic)("~/.zshrc")), ":\n\n    ").concat((0, deps_ts_1.dim)((0, deps_ts_1.italic)("source <(".concat(baseCmd.getPath(), " completions zsh)"))));
        })
            .action(function () {
            var baseCmd = __classPrivateFieldGet(_this, _ZshCompletionsCommand_cmd, "f") || _this.getMainCommand();
            console.log(_zsh_completions_generator_ts_1.ZshCompletionsGenerator.generate(baseCmd));
        });
        return _this;
    }
    return ZshCompletionsCommand;
}(command_ts_1.Command));
exports.ZshCompletionsCommand = ZshCompletionsCommand;
_ZshCompletionsCommand_cmd = new WeakMap();