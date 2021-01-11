const initState = {
    // a:1,
    b:1
}

const reducerB = (state = initState,action)=>{
    const tempState = {...state}

    // if (action.type === "Update-A") {
    //     return{
    //         ...state,
    //         a : state.a + state.b
    //     }
    // }
    if (action.type === "Update-B") {
        return{
            ...state,
            b : state.b + action.a
        }
    }
    return tempState;
}

export default reducerB;