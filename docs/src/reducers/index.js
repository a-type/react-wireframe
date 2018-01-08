import lipsum from 'lorem-ipsum';

const defaultState = {
  stories: {},
  profileImage: '#A9EEE6',
  name: lipsum({ count: 2, units: 'words' }),
  bio: 'I\'m a fake social network account! I love latin.',
  suggestions: [
    {
      name: lipsum({ count: 2, units: 'words' }),
      profileImage: '#FEFAEC',
    },
    {
      name: lipsum({ count: 2, units: 'words' }),
      profileImage: '#F9A1BC',
    },
    {
      name: lipsum({ count: 2, units: 'words' }),
      profileImage: '#625772',
    },
  ],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'REFRESH':
      return {
        ...state,
        stories: {}
      };
    case 'ADD_STORY':
      return {
        ...state,
        stories: {
          ...state.stories,
          [action.payload.story.id]: action.payload.story,
        },
      };
    case 'LIKE_STORY':
      return {
        ...state,
        stories: {
          ...state.stories,
          [action.payload.storyId]: {
            ...state.stories[action.payload.storyId],
            likes: state.stories[action.payload.storyId].likes + 1,
          },
        },
      };
    default:
      return state;
  }
}
