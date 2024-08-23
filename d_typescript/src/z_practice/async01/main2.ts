const fetBtn = document.getElementById('fetchUserData') as HTMLButtonElement;


fetBtn?.addEventListener('click', async () => {
  const userDataDiv = document.getElementById('userData');
  const userIdElement = document.getElementById('userId') as HTMLInputElement;
  const userId = userIdElement ? userIdElement.value : '';  
  const apiUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
  if (userDataDiv) {
    userDataDiv.innerHTML = 'Loading';
    try {
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error('Data Error');
      }
      const user = await res.json();
      userDataDiv.innerHTML = `
        <h2>User Details</h2>
        <p>Id: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Username: ${user.username}</p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>
      `;

    } catch (error) {
      userDataDiv.innerHTML = `<p>${error}</p>`;
      let errorMsg = (error as Error).message;
      console.log(errorMsg);
    }
  }
});