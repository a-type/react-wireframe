export default {
  refresh: () => ({ type: 'REFRESH', payload: {} }),
  addStory: (story) => ({ type: 'ADD_STORY', payload: { story } }),
  likeStory: (storyId) => ({ type: 'LIKE_STORY', payload: { storyId } }),
  follow: () => ({ type: 'FOLLOW', payload: {} }),
};
