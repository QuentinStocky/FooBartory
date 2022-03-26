import * as React from 'react';
import FoobartoryContext, { IRobot } from '../core/FoobartoryContext';
import { Button, MenuItem, Select } from '@mui/material';
import { ActivityRobot } from "../ts";

interface IRobotActionProps {
  robot: IRobot
}

/*
  Actions faisable a droite de chaque robot
*/
export default function RobotAction(props:IRobotActionProps) {
  const {robot} = props;
  const { createResource, switchResource, factory } = React.useContext(FoobartoryContext)
  // Je regarde si les conditions sont remplies pour miner du fooBar, et par conséquent bloquer ou non le minage
  const canMineFoobar = robot.activity !== ActivityRobot.foobar ? true : robot.activity === ActivityRobot.foobar && (factory.resources.foo > 0 && factory.resources.bar > 0)

  return (
    <>
      <Select defaultValue={ActivityRobot.foo} onChange={(event)=> switchResource({activity: event.target.value as ActivityRobot, robot})} sx={{marginRight: '5px'}}>
        <MenuItem value='foo'>Foo</MenuItem>
        <MenuItem value='bar'>Bar</MenuItem>
          <MenuItem value='foobar'>Foobar</MenuItem>
      </Select>
      <Button variant="outlined" onClick={()=> createResource(robot.activity)} disabled={!canMineFoobar}>Miner du {robot.activity}</Button> 
    </>
  )

}
