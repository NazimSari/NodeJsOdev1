const posts = [
  { name: "post1", author: "yazar1" },
  { name: "post2", author: "yazar2" },
  { name: "post3", author: "yazar3" },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.name);
  });
};

const addPost = (newPost) => {
  posts.push(newPost);
};

addPost({ name: "post4", author: "yazar4" });

listPosts();
