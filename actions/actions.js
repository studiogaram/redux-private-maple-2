/**
 * Created by garam on 2016. 6. 12..
 */
/*
 * action types
 */

export const SELECT_DUNGEON = 'SELECT_DUNGEON'
export const SELECT_SETPARTY = 'SELECT_SETPARTY'
export const SET_MEMBER_ROLE = 'SET_MEMBER_ROLE'
export const SET_MEMBER_NAME = 'SET_MEMBER_NAME'
// export const TOGGLE_TODO = 'TOGGLE_TODO'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */


/*
 * action creators
 */

export function selectDungeon(dungeonID) {
    return {
        type: SELECT_DUNGEON,
        dungeonID
    }
}

export function selectSetparty = (bool) => {
    return {
        type: SELECT_SETPARTY,
        bool
    }
}

export function setMemberRole = (roleID) => {
    return {
        type: SET_MEMBER_ROLE,
        roleID
    }
}

export function setMemberName = (name) => {
    return {
        type: SET_MEMBER_NAME,
        name
    }
}
