const initState = {
    themeId: 1 as number,
}



export const themeReducer = (state = initState, action: ChangeThemeIdAT): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID": {
            return {...state, themeId: action.id}
        }

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any

//types
type initStateType = typeof  initState
type ChangeThemeIdAT = ReturnType<typeof changeThemeId>
