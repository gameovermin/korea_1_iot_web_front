import React from 'react'

export default function JSX02() {
  // 픽사베이(pixabay)
  // : 이미지 경로(절대 경로)를 변수에 저장
  const imgUrl = 'https://cdn.pixabay.com/photo/2019/12/10/07/18/water-4685227_1280.jpg';

  const ice = {
    iceUrl: 'https://cdn.pixabay.com/photo/',
    description: '2019/12/10/07/18/',
    imageId: 'water-4685227_1280.jpg',
    name: '얼음바닥',
    imageTheme: {
      width: '200px',
      height: '150px'
    },
    theme: {
      backgroundColor: 'skyblue',
      color: 'violet'
    }
  }

  /*
    ! JSX 연습 예제
    >> JSX02 컴포넌트를 JSX 폴더 내의 index.tsx 파일에서 불러오기

    전체 단일 루트 노트 (빈Fragment 사용)
    - div 태그: style 속성 Theme 속성 지정
    >> p 태그: 얼음바닥's Picture
    >> img 태그
      - src 속성: 속성들을 + 연산자로 표현
      - alt 속성: name 속성
      - width, height 속성: 각각 imageTheme 지정
  */
  return (
    <>
      <div style={ice.theme}>
        <p>{ice.name}'s Piceture</p>
        <img src={ice.iceUrl + ice.description + ice.imageId} alt="얼음바닥" style={ice.imageTheme}/>
      </div>
    </>
  )
}
