"use strict";
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
exports.fetchPosts = fetchPosts;
exports.loginUser = loginUser;
exports.registerUser = registerUser;
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        // Simulate API delay
        yield new Promise((resolve) => setTimeout(resolve, 300));
        // Return mock posts
        return [
            {
                id: 1,
                title: 'Jane Doe',
                content: 'Hello, this is my first post!',
            },
            {
                id: 2,
                title: 'John Smith',
                content: 'Welcome to the social media app!',
            },
        ];
    });
}
function loginUser(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        // Replace with real API call
        if (email === 'test@example.com' && password === 'password') {
            return { success: true, token: 'mock-token', user: { id: '1', name: 'Test User' } };
        }
        return { success: false, message: 'Invalid credentials' };
    });
}
function registerUser(name, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        // Replace with real API call
        return { success: true, user: { id: '2', name, email } };
    });
}
