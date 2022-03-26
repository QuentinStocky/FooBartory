import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { Avatar, Chip } from '@mui/material';
import FoobartoryContext from '../core/FoobartoryContext';
export const DEFAULT_COLOR = 'rgb(255, 83, 65)'

/* 
  Ici on affiche la top bar au top de la page
*/
export default function TopBar(props: any) {
  const { factory } = React.useContext(FoobartoryContext)
  const canBuyRobot = factory.resources.foo > 5 && factory.resources.foobar > 2

  return (
    <Box sx={{ flexGrow: 1,}}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor:'white' }}>
            <Button variant="contained" sx={{bgcolor: DEFAULT_COLOR}} endIcon={<PrecisionManufacturingIcon />} onClick={props.setDialogOpen} disabled={!canBuyRobot}>
                Acheter un robot
            </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', justifyContent: 'center', display: 'flex' }}>
            Foobartory
          </Typography>
          <Chip label={`total de robots: ${factory.robots.length}/20`} sx={{marginRight: "20px"}} />
          <Chip label={`total de foo: ${factory.resources.foo}`} sx={{marginRight: "20px"}} />
          <Chip label={`total de bar: ${factory.resources.bar}`} sx={{marginRight: "20px"}} />
          <Chip label={`total de foobar: ${factory.resources.foobar}`} sx={{marginRight: "20px"}} />
          <Avatar sx={{ bgcolor: DEFAULT_COLOR }}>QC</Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}