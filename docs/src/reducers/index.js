import shakespeare from '../images/shakespeare.jpg';
import marlowe from '../images/marlowe.jpg';
import kyd from '../images/kyd.jpg';
import chapman from '../images/chapman.jpg';
import jonson from '../images/jonson.jpg';

const defaultState = {
  stories: {},
  profileImage: shakespeare,
  bio: 'Like a bard, if bards were cool',
  suggestions: [
    {
      name: 'Christopher Marlowe',
      profileImage: marlowe,
    },
    {
      name: 'Thomas Kyd',
      profileImage: kyd,
    },
    {
      name: 'George Chapman',
      profileImage: chapman,
    },
    {
      name: 'Ben Jonson',
      profileImage: jonson,
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
