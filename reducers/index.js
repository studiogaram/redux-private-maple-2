/**
 * Created by garam on 2016. 6. 12..
 */
import { combineReducers } from 'redux'
import { SELECT_DUNGEON, SELECT_SETPARTY, SET_MEMBER_ROLE, SET_MEMBER_NAME } from './actions'

function status(state = 0, action) {
    switch (action.type) {
        case SELECT_DUNGEON:
            return action.dungeonID
        case SELECT_SETPARTY:
            return action.bool
        default:
            return state
    }
}

function party(state = [], action) {
    switch (action.type) {
        case SET_MEMBER_ROLE:
            return [
                ...state,
                {
                    role: action.bool
                }
            ]
        case SET_MEMBER_NAME:
            return [
                ...state,
                {
                    name: action.name
                }
            ]
        default:
            return state
    }
}

const mapleApp = combineReducers({
    status,
    party
})

export default mapleApp