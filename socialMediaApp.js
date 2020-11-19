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
      if (curr.likes && curr.post) {
        return (acc += `Post: ${curr.post} \nLikes: ${curr.likes} \nID:${curr.ID} \n\n`);
      }
      if (curr.post) {
        return (acc += `Post: ${curr.post} \nID:${curr.ID} \n\n`);
      } else if (curr.likes) {
        return (acc += `Likes: ${curr.likes} \nID:${curr.ID} \n\n`);
      }
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
    if (post && likes) {
      this.posts.splice(ID - 1, 1);
    }
    if (post) {
      const postToChange = this.posts.find((post) => post.ID === ID);
      delete postToChange.post;
    } else if (likes) {
      const postToChange2 = this.posts.find((post) => post.ID === 3);
      delete postToChange2.likes;
    }
    console.log(this.posts);
  }

  addLike(id) {
    this.posts[id - 1].likes++;
  }

  removeLike(id) {
    this.posts[id - 1].likes--;
  }
}

//CALL STACK
const productData = new PostsControl(posts);
productData.createPost({ post: "Drunk Video", likes: 10 });
productData.editPost({ post: "Underwhelming Selfie", ID: 3 });
productData.removePost({ likes: "d", ID: 3 });
productData.addLike(2);
productData.removeLike(1);
console.log(productData.renderPosts());
//
