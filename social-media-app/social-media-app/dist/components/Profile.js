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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const api_1 = require("../api");
const Profile = ({ userId }) => {
    const [user, setUser] = (0, react_1.useState)(null);
    const [posts, setPosts] = (0, react_1.useState)([]);
    const [loading, setLoading] = (0, react_1.useState)(true);
    const [error, setError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
            setLoading(true);
            setError(null);
            try {
                const [userProfile, userPosts] = yield Promise.all([
                    (0, api_1.getUserProfile)(userId),
                    (0, api_1.getUserPosts)(userId)
                ]);
                setUser(userProfile);
                setPosts(userPosts);
            }
            catch (err) {
                setError('Failed to load profile or posts.');
            }
            finally {
                setLoading(false);
            }
        });
        fetchData();
    }, [userId]);
    const handleEditProfile = () => {
        // Logic for editing profile information
    };
    if (loading) {
        return react_1.default.createElement("div", null, "Loading...");
    }
    if (error) {
        return react_1.default.createElement("div", null, error);
    }
    return (react_1.default.createElement("div", null,
        user && (react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, user.name),
            react_1.default.createElement("p", null, user.bio),
            react_1.default.createElement("button", { onClick: handleEditProfile }, "Edit Profile"))),
        react_1.default.createElement("h2", null, "Posts"),
        react_1.default.createElement("ul", null, posts.map(post => (react_1.default.createElement("li", { key: post.id },
            react_1.default.createElement("h3", null, post.title),
            react_1.default.createElement("p", null, post.content)))))));
};
exports.default = Profile;
