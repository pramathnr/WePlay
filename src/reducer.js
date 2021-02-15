export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //set to null after devlopment...
    //token:'BQDlrIX65GG8NTlISErc8-O79BS0X9O_q6zTONhgDzhe0_MRJOQr8S-fGIliz9cS_45gE8PW6YMnvaqzpDCbq8ZXayAHcVU63Oyuok-H1dt0uwOrz4qrlsymx6Q4WNkHTXmFZWZakPfSOkvhGxTeGf6TGXpcvRIe77CJ89iLY1ipetZXa09l'
}

const reducer= (state,action)=>{
    console.log(action);
    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists,
            };  
        case 'SET_VALENTINES_DAY_SPECIAL':
            return{
                ...state,
                valentines_day_special: action.valentines_day_special
            };  
        default:
            return state;
    };
}

export default reducer;