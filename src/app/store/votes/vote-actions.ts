export const VoteActions = {
  NO : "NO",
  YES : "YES"
};

export interface Action {
   type : any;
}

export function voteYesAction() : Action {
  return {type : VoteActions.YES}
}

export const voteNoAction = function() : Action {
  return {type : VoteActions.NO};
}