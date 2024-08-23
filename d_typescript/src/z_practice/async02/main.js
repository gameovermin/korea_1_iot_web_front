/*
  ! 외부 API를 사용하는 비동기 작업 프로그램
  - jsonplaceholder의 photos 데이터를 사용
  - https://jsonplaceholder.typicode.com/photos


  >> URL을 통한 데이터 요청 시
  , URL경로?키=쌍 의 형태로 옵션 전달 가능
  https://jsonplaceholder.typicode.com/photos?albumId=1

  # 요구 사항 정리
  - 각 페이지에 photos 데이터의 사진을 4개씩 첨부
  (50 === (4 * 12) + 2)
  - 각 사진의 이름 (title)은 사진 아래 작성
  - 페이지 간의 이동은 버튼(Previous, Next)으로 이동

 */
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
var _a, _b;
// 현재 페이지 번호를 추적하는 변수 선언 (1로 초기화)
var currentPage = 1;
// 한 페이지에 표시할 사진의 수
var photoPerPage = 4;
var pageCount = 0;
// ? 지정된 페이지의 사진들을 비동기적으로 불러오는 함수 선언
function fetchPhotos(page) {
    return __awaiter(this, void 0, void 0, function () {
        var res, photos, renderPhotos_1, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")];
                case 1:
                    res = _a.sent();
                    if (!res.ok) {
                        throw new Error('데이터를 가져오지 못했슴');
                    }
                    return [4 /*yield*/, res.json()];
                case 2:
                    photos = _a.sent();
                    console.log(photos.length);
                    renderPhotos_1 = photos.slice((page - 1) * photoPerPage, page * photoPerPage);
                    pageCount = Math.ceil(((photos.length) / photoPerPage));
                    console.log("pageCount", pageCount);
                    return [2 /*return*/, renderPhotos_1];
                case 3:
                    error_1 = _a.sent();
                    console.log('Falid');
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// 사진을 페이지에 렌더링 하는 함수
// ? 4개씩 나누어진 사진 배열을 매개변수로 받아옴
function renderPhotos(photos) {
    var container = document.getElementById('photo-container');
    container.innerHTML = '';
    photos.forEach(function (photo) {
        var photoElem = document.createElement('div');
        photoElem.className = 'photo-item';
        photoElem.innerHTML = "\n      <img src=\"".concat(photo.thumbnailUrl, "\"alt=\"").concat(photo.title, "\" />\n      <p>").concat(photo.title, "</p>  \n    ");
        container.appendChild(photoElem);
    });
}
// ! 버튼 이벤트 등록
// 이전 버튼 이벤트
(_a = document.getElementById('prev-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    // 현재 페이지가 1보다 크면 이전 페이지로 이동 (로직 실행)
    if (currentPage > 1) {
        currentPage--;
        updatePhotos();
    }
    else {
        console.log('첫페이지입니다');
    }
});
// 다음 버튼 이벤트
(_b = document.getElementById('next-button')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    // 현재 페이지가 1보다 크면 이전 페이지로 이동 (로직 실행)
    if (pageCount <= currentPage) {
        alert('마지막페이지입니다');
    }
    else {
        currentPage++;
        updatePhotos();
    }
});
// ? 전체 프로젝트 실행 (사진 불러오기)
function updatePhotos() {
    return __awaiter(this, void 0, void 0, function () {
        var photos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetchPhotos(currentPage)];
                case 1:
                    photos = _a.sent();
                    renderPhotos(photos);
                    return [2 /*return*/];
            }
        });
    });
}
updatePhotos();
