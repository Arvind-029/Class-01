import {
    REQUEST_FETCH_PEOPLE,
    RECEIVE_FETCH_PEOPLE
} from '../actions/types';

const INTIAL_STATE={
    isFetching:false,
    data:[

    ]
};

//Reducer may contain two param (state,action)
export  default (state=INTIAL_STATE,action)=>{
    switch (action.type) {

        case REQUEST_FETCH_PEOPLE:{
                return { ...state, isFetching: true };
        }

        case RECEIVE_FETCH_PEOPLE:{
            return{...state,isFetching:false,data:action.payload}
        }



         default:
            return state

    }
}
