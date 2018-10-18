import React from 'react';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import Welcome from './components/Welcome';
import TaskList from './components/TaskList';
import TaskCreate from './components/TaskCreate';
import Icon from 'react-native-vector-icons/FontAwesome';



class RouterFlux extends React.Component {

    
    render() {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="login" hideNavBar initial >
                    <Scene key="welcome" component={Welcome}  />
                </Scene>
                <Scene key="main" >
                    <Scene key="task_list" 
                            component={TaskList} 
                            title="Today Task(s)"
                            rightTitle="ADD Task" 
                            onRight={() => Actions.task_create()}                                                     
                             />
                    <Scene key="task_create" component={TaskCreate} title="Task"/>
                </Scene>  
            </Stack>
        </Router>
    );
    }
};
export default RouterFlux