"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Register = () => {
    const [username, setUsername] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const [confirmPassword, setConfirmPassword] = (0, react_1.useState)('');
    const [error, setError] = (0, react_1.useState)('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        // Call the API to register the user
        // api.register({ username, email, password })
        //     .then(response => {
        //         // Handle successful registration
        //     })
        //     .catch(err => {
        //         setError('Registration failed');
        //     });
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null, "Register"),
        error && react_1.default.createElement("p", { style: { color: 'red' } }, error),
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", null, "Username:"),
                react_1.default.createElement("input", { type: "text", value: username, onChange: (e) => setUsername(e.target.value), required: true })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", null, "Email:"),
                react_1.default.createElement("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", null, "Password:"),
                react_1.default.createElement("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), required: true })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("label", null, "Confirm Password:"),
                react_1.default.createElement("input", { type: "password", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value), required: true })),
            react_1.default.createElement("button", { type: "submit" }, "Register"))));
};
exports.default = Register;
