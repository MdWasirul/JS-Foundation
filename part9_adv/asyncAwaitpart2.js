function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched successfully...");
    }, 3000);
  });
}

async function getBlogData() {
  try {
    console.log("fetching blog data..");
    // const blogData=await fetchPostData();
    // const commentData=await fetchCommentData();
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    // console.log(blogData);
    console.log(postData);
    console.log(commentData);
    console.log("fetch complete");
  } catch (error) {
    console.error("Error fetching data ", error);
  }
}
getBlogData();

/*
Output--->
fetching blog data..
Post data fetched
Comment data fetched successfully...
fetch complete

*/
