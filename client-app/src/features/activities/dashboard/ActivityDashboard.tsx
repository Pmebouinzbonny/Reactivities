import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../Form/ActivityForm';

interface Props{

    activities: Activity[];
    selectedActivity: Activity| undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: ()=> void;
    openForm: (id: string)=>void;
    closeForm: ()=> void;
    editMode:boolean;
    createOrEdit: (activity: Activity)=> void;
    deletedActivity: (id:string) => void;
    submitting:boolean;
}

export default function ActivityDashboard({activities,selectActivity,selectedActivity,cancelSelectActivity, openForm, editMode, closeForm, createOrEdit, deletedActivity, submitting}: Props){
    return(
        <Grid>
            <Grid.Column width='10'>
            <ActivityList activities={activities} 
                selectActivity= {selectActivity} 
                deletedActivity= {deletedActivity}
                submitting= {submitting}/>              
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                <ActivityDetails 
                    activity={activities[0]} 
                    cancelSelectActivity={cancelSelectActivity}
                    openForm= {openForm}
                />}  
                {editMode &&  
                <ActivityForm 
                    closeForm={closeForm} 
                    activity={selectedActivity} 
                    createOrEdit={createOrEdit}
                    submitting={submitting}/>}  
            </Grid.Column>
        </Grid>
    )
}