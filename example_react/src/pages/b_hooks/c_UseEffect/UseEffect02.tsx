import React, { useEffect, useState } from 'react'
import UseMemo02 from '../d_Use/UseMemo02';

// ! jsonplaceholder의 posts 데이터를 비동기 함수로 가져오기
// >> async, await, fetch()

// - 게시물을 가져오기
// >> 로딩, 성공, 실패
// >> 해당 컴포넌트가 마운팅될 때만 실행

type Post = {
  id: number;
  title: string;
  body: string;
}

function UseEffect02() {
  // ? 게시물 상태 관리
  const [posts, setPosts] = useState<Post[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>('');

  // ? 로딩 상태 & 에러 상태 관리
  const [loading, setLoading] = useState<boolean>(false);
  
  const [error, setError] = useState<string | null>(null);

  const fetctPosts = async() => {
    setLoading(true);
    setError(null);
    
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/userId=1`);

      if(!res.ok) {
        throw new Error(`HTTP Error! status: ${res.status}`);
      }

      const data = await res.json();

      setPosts(data);
      setLoading(false);

    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }

  }

  // ? 컴포넌트가 마운트 될 때 데이터 호출
  useEffect(() => {
    fetctPosts();
    console.log('컴포넌트가 마운트될때 실행');
  }, []);

  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().trim().includes(searchTerm.toLowerCase())
  });

  return (
    <div style={{
      margin: '0 auto',
      maxWidth: '800px',
      padding: '20px',
      backgroundColor: 'lightcoral'
    }}>
      <h3>Posts 게시물</h3>

      <input 
        type="text" 
        placeholder='검색어 입력'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* <button onClick={fetctPosts}>게시물 불러오기</button> */}

      {loading && <div>게시물을 로딩중입니다</div>}
      {error && <div>Error: {error}</div>}

      {/* {posts.map(post => ( */}
      {filteredPosts.map((post) => (
        <ul>
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        </ul>
      ))}
    </div>
  );
}

// 컴포넌트를 메모이제이션하고 export default로 내보내기
export default React.memo(UseMemo02);
