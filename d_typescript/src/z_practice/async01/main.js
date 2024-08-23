// export const tmp = '';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var fetchUser = document.getElementById('fetchUserData');
var userDataDiv = document.getElementById('userData');
var userIdElement = document.getElementById('userId');
fetchUser === null || fetchUser === void 0 ? void 0 : fetchUser.addEventListener('click', function () { return __awaiter(_this, void 0, void 0, function () {
    var userId, res, userData, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = userIdElement.value;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/users/".concat(userId))];
            case 2:
                res = _a.sent();
                if (!res.ok) {
                    throw new Error('Fetch User Error');
                }
                return [4 /*yield*/, res.json()];
            case 3:
                userData = _a.sent();
                console.log(userData);
                userDataDiv.innerHTML = "\n      <h2>User Details</h2>\n      <p>Id: ".concat(userData.id, "</p>\n      <p>Name: ").concat(userData.name, "</p>\n      <p>Email: ").concat(userData.email, "</p>\n      <p>Username: ").concat(userData.username, "</p>\n      <p>Address: ").concat(userData.address.street, ", ").concat(userData.address.city, "</p>\n    ");
                return [3 /*break*/, 5];
            case 4:
                error_1 = _a.sent();
                userDataDiv.innerHTML = 'Data None Error';
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); });
// async function fetchFunc(userId: string) {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     if (!res.ok) {
//       throw new Error('Fetch User Error');
//     }
//     const userData = await res.json();
//     console.log(userData);
//     userDataDiv.innerHTML = `
//       <h2>User Details</h2>
//       <p>Id: ${userData.id}</p>
//       <p>Name: ${userData.name}</p>
//       <p>Email: ${userData.email}</p>
//       <p>Username: ${userData.username}</p>
//       <p>Address: ${userData.address.street}, ${userData.address.city}</p>
//     `;
//   } catch (error) {
//     userDataDiv.innerHTML = 'Data None Error';
//   }
// }
