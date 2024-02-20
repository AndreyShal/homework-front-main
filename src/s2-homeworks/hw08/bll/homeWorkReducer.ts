import {initialPeople, UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[] = initialPeople, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
             return [...initialPeople].sort((a: UserType, b: UserType) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();

                    if (action.payload === 'up') {
                        if (nameA < nameB) return -1
                        if (nameA > nameB) return 1
                    } else if(action.payload === 'down') {
                        if (nameA > nameB) return -1
                        if (nameA < nameB) return 1
                    }

                    return 0
                }
            )
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
