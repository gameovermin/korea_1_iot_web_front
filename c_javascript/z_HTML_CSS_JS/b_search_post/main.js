/*
  ! 프로그램 기능 정의

  - jsonplaceholder의 데이터를 사용하여 posts(게시물)을 검색
  > 데이터의 경로가 올바르지 않을 경우 (예외 처리)
  > 데이터를 정상적으로 가지고 온 경우 (DOM 요소 생성 출력)

  - 검색의 기능
  > input창에 입력되는 내용이 posts 내용에 존재하는 경우
  > 해당 내용만 필터링되어 출력 (filter)

  + ) qlehdrl cjfl(async, await) / 예외 처리

 */
document.addEventListener('DOMContentLoaded', async() => {
  // 사용할 특정 사용자 ID를 정의 (임의의로 userId 1번의 데이터를 불러옴)

  const userId = 2;
  
  // HTML 요소 불러오기
  const postsContainer = document.getElementById('posts');
  const searchInput = document.getElementById('search-input');
  const errorDiv = document.getElementById('error');

  // ! 포스트를 저장할 배열 초기화
  let allPosts = [];

  
  // & 초기 포스트 로드
  try {
    allPosts = await fetchPosts(userId);
    console.log(allPosts);
    displayPosts(allPosts);
  } catch (error) {
    showError('데이터를 불러오는 중 오류가 발생했습니다');
  }
  
  // & 검색 입력 필드에 입력이 있을 때마다 실행되는 이벤트 리스너 추가
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    // ? 검색어가 없는 경우
    if (!searchTerm) {
      displayPosts(allPosts);
      clearError();
      return;
    }

    // ? 검색어가 있는 경우
    const filteredPosts = filterPosts(allPosts, searchTerm);

    if (filteredPosts.length === 0) {
      showError('일치하는 포스트가 없습니다');
    } else {
      displayPosts(filteredPosts);
      clearError();
    }

  });

  function displayPosts(posts) {
    postsContainer.innerHTML = '';
    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      postDiv.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
      postsContainer.appendChild(postDiv);
    });
  }

  function filterPosts(posts, searchTerm) {
    console.log('posts', posts.body);
    console.log('searchTerm', searchTerm);
    return posts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) || 
      post.body.toLowerCase().includes(searchTerm)
    );    
  }

  // & 사용자의 포스트를 비동기적으로 가져오는 함수를 정의
  async function fetchPosts(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    
    if (!res.ok) {
      throw new Error('네트워크 응답에 문제가 있음');
    } 

    return res.json(); // 응답을 JSON 형태로 파싱
  }

  // & 에러 머시지를 표시하는 함수를 정의
  function showError(message) {
    errorDiv.textContent = message;
    errorDiv.style.display = '';
  }

  // & 에러 메시지를 지우는 함수를 정의
  function clearError() {
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
  }
});
