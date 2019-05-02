import uuid from "uuid";

import { combineEpics } from "redux-observable";

import { fromPromise } from 'rxjs/observable/fromPromise';
import { mergeMap, map, catchError } from "rxjs/operators";
import { forkJoin, of } from "rxjs";

import { FETCHING_MESSAGES, ADD_MESSAGE } from "./constants";
import { getMessages, addMessage } from "./api";
import { 
  getMessagesSuccess, 
  getMessagesFailure, 
  addMessageSuccess, 
  addMessageFailure
} from "./actions";

const fetchMessageEpic = action$ =>
  action$.ofType(FETCHING_MESSAGES).pipe(
    mergeMap(_ =>
      fromPromise(getMessages()).pipe(
        map(({data}) => getMessagesSuccess(data)),
        catchError(err => of(getMessagesFailure(err)))
      )
    )
  );

const addMessageEpic = action$ =>
  action$.ofType(ADD_MESSAGE).pipe(
    mergeMap(action => {
      const payload = action.payload;
      const total = payload.length;
      const id = uuid();
      const createdAt = new Date().getTime();
      const msgParts = payload.map((content, part) => ({
        id,
        part: part + 1,
        total,
        content,
        createdAt
      }));

      return forkJoin(msgParts.map(addMessage)).pipe(
        map(_ => addMessageSuccess(msgParts)),
        catchError(err => of(addMessageFailure(err)))
      );
    })
  );

export default combineEpics(
  fetchMessageEpic,
  addMessageEpic
);