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
const Post = ({ content, author, onLike, onComment }) => {
    const [comments, setComments] = (0, react_1.useState)([]);
    const [commentInput, setCommentInput] = (0, react_1.useState)('');
    const handleCommentSubmit = () => {
        if (commentInput) {
            setComments([...comments, commentInput]);
            onComment(commentInput);
            setCommentInput('');
        }
    };
    return (react_1.default.createElement("div", { className: "post" },
        react_1.default.createElement("h3", null, author),
        react_1.default.createElement("p", null, content),
        react_1.default.createElement("button", { onClick: onLike }, "Like"),
        react_1.default.createElement("div", null,
            react_1.default.createElement("input", { type: "text", value: commentInput, onChange: (e) => setCommentInput(e.target.value), placeholder: "Add a comment..." }),
            react_1.default.createElement("button", { onClick: handleCommentSubmit }, "Comment")),
        react_1.default.createElement("div", { className: "comments" }, comments.map((comment, index) => (react_1.default.createElement("div", { key: index, className: "comment" }, comment))))));
};
exports.default = Post;
