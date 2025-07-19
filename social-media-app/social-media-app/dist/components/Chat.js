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
const Chat = () => {
    const [messages, setMessages] = (0, react_1.useState)([]);
    const [newMessage, setNewMessage] = (0, react_1.useState)('');
    (0, react_1.useEffect)(() => {
        // Logic to fetch messages from the server can be added here
    }, []);
    const sendMessage = (e) => {
        if (e)
            e.preventDefault();
        if (newMessage.trim()) {
            setMessages([...messages, newMessage]);
            setNewMessage('');
            // Logic to send the message to the server can be added here
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "chat-window", style: { border: '1px solid #ccc', padding: 10, height: 200, overflowY: 'auto', marginBottom: 10 } }, messages.map((msg, index) => (react_1.default.createElement("div", { key: index, className: "message", style: { margin: '5px 0' } }, msg)))),
        react_1.default.createElement("form", { onSubmit: sendMessage, style: { display: 'flex', gap: 8 } },
            react_1.default.createElement("input", { type: "text", value: newMessage, onChange: (e) => setNewMessage(e.target.value), placeholder: "Type a message...", style: { flex: 1 } }),
            react_1.default.createElement("button", { type: "submit" }, "Send"))));
};
exports.default = Chat;
