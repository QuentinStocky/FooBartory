import { Paper } from '@mui/material';
import * as React from 'react';
import AddRobotDialog from './components/Dialog';
import EndDialog from './components/EndDialog';
import RobotsList from './components/RobotsList';
import TopBar from './components/TopBar';
import FoobartoryContext from './core/FoobartoryContext';


const App = () => {
  const [openDialog, setDialogOpen] = React.useState(false);
  const { factory } = React.useContext(FoobartoryContext)

  return (
    <>
      {/*Affichage de la top bar pour l'achat d'un robot */}
      <TopBar setDialogOpen={() => setDialogOpen(prevOpen => !prevOpen)}/>
      {/*Gestion de la dialog de création */}
      <AddRobotDialog openDialog={openDialog} setDialogOpen={() => setDialogOpen(prevOpen => !prevOpen)}/>
      {/*Affichage de la liste des robots */}
      <Paper elevation={3} sx={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
        <RobotsList/>
      </Paper>
      {factory.robots.length === 20 && <EndDialog/> }
    </>
  )
}

export default App