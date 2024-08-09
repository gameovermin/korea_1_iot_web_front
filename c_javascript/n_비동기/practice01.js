
// JSONPlaceholder
// : 무료 REST API 서비스
// >> 가짜 데이터를 제공하는 Mock Server(가짜 서버)
// >> 게시글, 댓글, 사용자, 사진 등의 정보를 JSON 형식으로 제공

// https://jsonplaceholder.typicode.com
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/원하고자하는데이터배열명/id

async function fetchPosts(postId) {

  try {
    // 실제 함수 구현부

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    if(!res.ok) {
      throw new Error(`HTTP error: status ${res.status}`);
    }
    const posts = await res.json();
    console.log(posts);

  } catch (e) {
    console.log(`게시물 가져오기 실패 : ${e.message}`);
  }
}

fetchPosts(3);
fetchPosts(0);