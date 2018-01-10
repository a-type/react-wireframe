import lipsum from 'lorem-ipsum';
import theme from '../theme';

const defaultState = {
  stories: {},
  profileImage: theme.colors.accents[3],
  name: lipsum({ count: 2, units: 'words' }),
  bio: 'I\'m a fake social network account! I love latin.',
  followed: false,
  suggestions: [
    {
      name: lipsum({ count: 2, units: 'words' }),
      profileImage: theme.colors.accents[2],
    },
    {
      name: lipsum({ count: 2, units: 'words' }),
      profileImage: theme.colors.accents[1],
    },
    {
      name: lipsum({ count: 2, units: 'words' }),
      profileImage: theme.colors.accents[0],
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
    case 'FOLLOW':
      return {
        ...state,
        followed: true,
      };
    default:
      return state;
  }
}
