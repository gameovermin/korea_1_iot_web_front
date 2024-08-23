// export const tmp = '';

const fetchUser = document.getElementById('fetchUserData') as HTMLButtonElement;
const userDataDiv = document.getElementById('userData') as HTMLDivElement;
const userIdElement = document.getElementById('userId') as HTMLInputElement;

fetchUser?.addEventListener('click', async () => {
  const userId = userIdElement.value;
  // if (userId !== null) {
  //   console.log(1111);
  //   fetchFunc(userId);
  // } else {
  //   userDataDiv.innerHTML = 'Data None Error';
  // }
  try {

    // 단순 value값만 들어갈때는 url/${value} 들어가고
    // key : value 형식으로 값이 들어갈때 url?=${요소} 가 들어감
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    
    if (!res.ok) {
      throw new Error('Fetch User Error');
    }
    
    const userData = await res.json();
    console.log(userData);
    userDataDiv.innerHTML = `
      <h2>User Details</h2>
      <p>Id: ${userData.id}</p>
      <p>Name: ${userData.name}</p>
      <p>Email: ${userData.email}</p>
      <p>Username: ${userData.username}</p>
      <p>Address: ${userData.address.street}, ${userData.address.city}</p>
    `;
  } catch (error) {
    userDataDiv.innerHTML = 'Data None Error';
  }
});

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