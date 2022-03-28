import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import FoobartoryContext from '../core/FoobartoryContext';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { DEFAULT_COLOR } from './TopBar';
import RobotAction from './RobotAction';
import { Box } from '@mui/material';
import { IRobot } from '../ts';

export default function RobotsList() {
  const { factory } = React.useContext(FoobartoryContext)

  return (
    <List sx={{ 
        width: '100%',
      }}>
      {factory.robots.map((robot: IRobot) => (
        <React.Fragment key={robot.id}>
          <Box sx={{display: "flex", flexDirection: "row", alignItems: 'center'}}>
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <PrecisionManufacturingIcon sx={{color: DEFAULT_COLOR}}/>
            </ListItemAvatar>
            <ListItemText
              primary={robot.name}
              secondary={robot.activity}
            />
          </ListItem>
          <RobotAction robot={robot}/>
        </Box>
        <Divider />
      </React.Fragment>
      ))}
    </List>
  );
}
