function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name:"chaiCode",url:"https://chaicode.com"});
        console.log("Youtube is loaded ")
    }, 3000);
  });
}
async function getUserData() {
    try {
        console.log("Fetching User Data......")
      const userData= await fetchUserData();
      console.log("User data fetched successfuly");
      console.log(userData);
    } catch (error) {
        console.log("Error fetching data",error);
    }
}
getUserData();

/*
Fetching User Data......
User data fetched successfuly
{ name: 'chaiCode', url: 'https://chaicode.com' }

 */