//INITIAL ARRAY
const posts = [
  {
    post: "Tempelhof Sunset",
    likes: 50,
    ID: 1,
  },
  {
    post: "My new baby kitten",
    likes: 300,
    ID: 2,
  },
];
//VIEW
class ViewPosts {
  constructor(initPosts) {
    this.posts = initPosts;
  }
  renderPosts() {
    return this.posts.reduce((acc, curr) => {
      acc += `Post: ${curr.post} \nLikes: ${curr.likes} \nID:${curr.ID} \n\n`;
      return acc;
    }, "");
  }
}
//CONTROLS
class PostsControl extends ViewPosts {
  constructor(posts) {
    super(posts);
  }
  createPost({ post, likes }) {
    const newPost = {
      post,
      likes,
      ID: this.posts.length + 1,
    };
    const newPostClone = [...this.posts, newPost];
    this.posts = newPostClone;
  }
  editPost({ post, likes, ID }) {
    return this.posts.map((el) => {
      if (el.ID === ID) {
        if (post) {
          el.post = post;
        }
        if (likes) {
          el.likes = likes;
        }
      }
    });
  }
  removePost({ post, likes, ID }) {
    let IDindex = ID - 1;
    let postIndex = this.posts[IDindex];
    console.log(postIndex);
    if (post && likes) {
      this.posts.splice(IDindex, 1);
    }
    if (post) {
      // postIndex.splice(0, 1);
    }
    if (likes) {
      // postIndex.splice(1, 1);
    }
  }
}
//CALL STACK
const productData = new PostsControl(posts);
productData.createPost({ post: "Drunk Video", likes: 10 });
productData.editPost({ post: "Underwhelming Selfie", ID: 3 });
productData.removePost({ post: "delete", /*likes: "delete",*/ ID: 3 });
console.log(productData.renderPosts());
//
