const CHANGE_TEXT = 'changeText/CHANGE_TEXT'


export const changeText = name => ({  //ACTION
    type: CHANGE_TEXT,
    name //name:name
})




const initialState = {
    text: []
}




export default (state = initialState, action) => {  //REDUCER
    switch (action.type) {
        case CHANGE_TEXT:
            return {
                ...state,
                text: state.text[{name: action.name}]
            }
        default:
            return state
    }
}