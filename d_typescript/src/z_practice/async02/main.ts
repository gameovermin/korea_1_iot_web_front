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

// ? Photo 타입 정의
type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

// 현재 페이지 번호를 추적하는 변수 선언 (1로 초기화)
let currentPage = 1;

// 한 페이지에 표시할 사진의 수
const photoPerPage = 4;

let pageCount = 0;

// ? 지정된 페이지의 사진들을 비동기적으로 불러오는 함수 선언
async function fetchPhotos(page: number) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=1`);

    if(!res.ok) {
      throw new Error('데이터를 가져오지 못했슴');
    }

    const photos: Photo[] = await res.json();
    console.log(photos.length);
    
    // slice
    // : 배열 메서드, 특정 부분을 새로운 배열로 반환
    // 시작 인덱스 <= x < 끝 인덱스
    // (page - 1) * photoPerPage, page * photoPerPage
    // : 현재 페이지의 첫 번째 사진 인덱스 계산
    // >> 페이지 번호는 1부터 시작
    // >> 인덱스 번호는 0부터 시작
    // : 페이지 번호에 -1을 한 번호에 페이지 당 사진 수를 곱셈
    // : 현재 페이지의 첫 번째 사진이 배열에서 몇 번쨰 위치하는지 계산

    const renderPhotos: Photo[] = photos.slice((page - 1) * photoPerPage, page * photoPerPage);
    pageCount = Math.ceil(((photos.length) / photoPerPage));

    console.log("pageCount", pageCount);
    
    return renderPhotos;
  } catch (error) {
    console.log('Falid');
    return [];
  }
}

// 사진을 페이지에 렌더링 하는 함수
// ? 4개씩 나누어진 사진 배열을 매개변수로 받아옴
function renderPhotos(photos: Photo[]) {
  const container = document.getElementById('photo-container') as HTMLElement;
  container.innerHTML = '';

  photos.forEach(photo => {
    const photoElem = document.createElement('div');
    photoElem.className = 'photo-item';
    photoElem.innerHTML = `
      <img src="${photo.thumbnailUrl}"alt="${photo.title}" />
      <p>${photo.title}</p>  
    `;

    container.appendChild(photoElem);
  });
}

// ! 버튼 이벤트 등록
// 이전 버튼 이벤트
document.getElementById('prev-button')?.addEventListener('click', () => {
  // 현재 페이지가 1보다 크면 이전 페이지로 이동 (로직 실행)
  if (currentPage > 1) {
    currentPage--;
    updatePhotos();
  } else{
    console.log('첫페이지입니다');
  }
});
// 다음 버튼 이벤트
document.getElementById('next-button')?.addEventListener('click', () => {
  // 현재 페이지가 1보다 크면 이전 페이지로 이동 (로직 실행)
  if(pageCount <= currentPage) {
    alert('마지막페이지입니다');
  } else {
    currentPage++;
    updatePhotos();
  }
});

// ? 전체 프로젝트 실행 (사진 불러오기)

async function updatePhotos() {
  const photos = await fetchPhotos(currentPage);

  renderPhotos(photos);
}

updatePhotos();