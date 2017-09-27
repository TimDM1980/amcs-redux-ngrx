import { VoteActions } from "./vote-actions";
import { INITIAL_VOTES_STATE } from "./vote-state";

export function voteReducer(state = INITIAL_VOTES_STATE, action){
    switch(action.type) {
      case VoteActions.VOTES_LOADED  :   return {...state, counter: action.counter};
      default               :   return state;
    }
  }