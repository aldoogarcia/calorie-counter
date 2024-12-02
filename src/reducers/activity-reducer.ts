import { Activitys } from "../types/Type"

export type ActivityAction = 
{ type:'save-activity',payload:{newActivity:Activitys}}|
{ type:'set-activity',payload:{id:Activitys['id']}}|
{ type:'delete-activity',payload:{id:Activitys['id']}}|
{ type:'reset-app'}


export type ActivitiesType={
    activities: Activitys[]
    activitieID: Activitys['id']
}

const searchLocalStorage =()=>{
    const activitie = localStorage.getItem('activity')
    return activitie ? JSON.parse(activitie): []
}

export const initialState: ActivitiesType ={
    activities:searchLocalStorage(),
    activitieID:''
}

export const activityReduce = (
    state:ActivitiesType= initialState,
    action:ActivityAction
)=>{
    if(action.type==='save-activity'){
        //console.log(action.payload.newActivity);
        let updateActivie:Activitys[]=[]
        if(state.activitieID){
            updateActivie= state.activities.map(activity => activity.id==state.activitieID ? action.payload.newActivity: activity)
        }else{
            updateActivie= [...state.activities, action.payload.newActivity]
            
        }
        return{
            ...state,
            activities:updateActivie,
            activitieID:''
        }        
    }

    if(action.type=== 'set-activity'){
        
        return{
            ...state,
            activitieID: action.payload.id,
            
            
        }
    }

    if(action.type==='delete-activity'){
        return{
            ...state,
            activities: state.activities.filter(activity => activity.id!=action.payload.id),
            
        }
    }

    if(action.type==='reset-app'){
        return{
            activities:[],
            activitieID:''
        }

    }

    return state;
}