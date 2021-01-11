const initState = {
    a:1
    // b:1
}

const reducerA = (state = initState,action)=>{
    const tempState = {...state}

    if (action.type === "Update-A") {
        return{
            ...state,
            a : state.a + action.b
        }
    }
    // if (action.type === "Update-B") {
    //     return{
    //         ...state,
    //         b : state.b + state.a
    //     }
    // }
    return tempState;
}

export default reducerA;