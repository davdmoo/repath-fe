import { POSTS_FETCH_SUCCESS, FETCH_SCROLLS, POSTS_DELETE_SUCCESS, LOADING_POSTS, ERROR_POSTS, AFTER_POST_LOADING, AFTER_CLICK_POST_LOADING, FETCH_AFTER_LIKE, FETCH_AFTER_COMMENT, FETCH_AFTER_UNLIKE } from '../actionTypes';

const initialState = {
  posts: [],
  postsLoading: true,
  afterClickPostLoading: false,
  postsError: null,
  afterPostLoading: false,
  allPosts: [],
  hasMore: true,
};

function postReducer(state = initialState, action) {
  switch (action.type) {
    case POSTS_FETCH_SUCCESS:
      console.log(state.posts, '<<<<<<<< INI STATE POST');
      // state.allPosts = action.payload;
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        // allPosts: action.payload,
      };

    case POSTS_DELETE_SUCCESS:
      const id = action.payload;
      const postAfterDelete = state.posts.filter((post) => post._id !== id);

      // console.log(postAfterDelete, '<<<<<<<< INI POST YG SESUDAH DI DELETE');
      return {
        ...state,
        posts: postAfterDelete,
      };

    case LOADING_POSTS:
      return {
        ...state,
        postsLoading: action.payload,
      };

    case ERROR_POSTS:
      return {
        ...state,
        postsError: action.payload,
      };

    case AFTER_POST_LOADING:
      return {
        ...state,
        afterPostLoading: action.payload,
      };

    case AFTER_CLICK_POST_LOADING:
      // console.log(posts);
      return {
        ...state,
        afterClickPostLoading: action.payload,
      };

    case FETCH_AFTER_LIKE:
      let newPosts = state.posts;

      let arrIdx;
      let newObj;

      newPosts.forEach((e, idx) => {
        if (e._id == action.payload.data.postId) {
          arrIdx = idx;
        }
      });

      newObj = newPosts[arrIdx];
      newObj = { ...newObj, likes: [...newObj.likes, action.payload.data] };
      newPosts[arrIdx] = newObj;

      return {
        ...state,
        posts: newPosts,
      };

    case FETCH_AFTER_COMMENT:
      let newPostsAfterComment = state.posts; // 1. AMBIL STATE POSTS (TIMELINE), DIMASUKIN KE VARIABEL BARU

      let arrIdxComment;
      let newObjComment;
      // 2. VARIABEL INDEX, VARIABEL OBJECT

      newPostsAfterComment.forEach((e, idx) => {
        if (e._id == action.payload.data.postId) {
          arrIdxComment = idx;
        }
      });

      newObjComment = newPostsAfterComment[arrIdxComment]; // 3. OBJECT TADI KOSONG, SEKARANG DI ASSIGN PAKE POSTS YANG ARRAY KE INDEX
      newObjComment = { ...newObjComment, comments: [...newObjComment.comments, action.payload.data] };
      newPostsAfterComment[arrIdxComment] = newObjComment;

      return {
        ...state,
        posts: newPostsAfterComment,
      };

    case FETCH_AFTER_UNLIKE:
      let newPostsAfterUnlike = state.posts;

      let arrIdxUnlike;
      let newObjUnlike;

      newPostsAfterUnlike.forEach((e, idx) => {
        if (e._id == action.payload.data.postId) {
          arrIdxUnlike = idx;
        }
      });

      newObjUnlike = newPostsAfterUnlike[arrIdxUnlike].likes.filter((like) => like._id !== action.payload.data._id);
      newPostsAfterUnlike[arrIdxUnlike].likes = newObjUnlike;

      return {
        ...state,
        posts: newPostsAfterUnlike,
      };

    case FETCH_SCROLLS:
      // allPosts.push(state.posts);
      const scrollPosts = [...state.posts, ...state.allPosts];
      console.log(state.allPosts, '<<<<<<<< INI STATE ALLPOSTS');
      console.log(scrollPosts, '<<<<<<<< POST AFTER SCROLL');
      return {
        ...state,
        allPosts: scrollPosts,
      };

    case `HAS_MORE`:
      return {
        ...state,
        hasMore: action.payload,
      };

    default:
      return state;
  }
}

export default postReducer;
