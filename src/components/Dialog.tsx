import React, {useCallback} from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from 'react-hook-form';
import FoobartoryContext from '../core/FoobartoryContext';
import { MenuItem, Select } from '@mui/material';
import { TextField } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

interface DialogProps {
    openDialog: boolean;
    setDialogOpen: () => void;
}
export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
/**
 * Dialogue d'achat d'un robot, avec l'aide de react hook form pour structurer un peu le formulaire
 * @param props 
 * @returns 
 */
export default function AddRobotDialog(props: DialogProps) {
    const {openDialog, setDialogOpen} = props;
    const { buyRobot } = React.useContext(FoobartoryContext)

    const { control, handleSubmit, reset } = useForm({
      mode: 'onChange',
      defaultValues: {
          name: '',
          activity: 'foo'
      }
    })

    const onSubmit = useCallback((data:any) => {
      buyRobot(data)
      setDialogOpen()
    }, [buyRobot, setDialogOpen])

    const handleCloseDialog = useCallback(() => {
      reset()
      setDialogOpen()
    }, [reset, setDialogOpen])

  return (
    <div>
      <BootstrapDialog
        onClose={handleCloseDialog}
        fullWidth
        maxWidth='sm'
        aria-labelledby="customized-dialog-title"
        open={openDialog}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleCloseDialog}>
          Acheter un robot
        </BootstrapDialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
            <DialogContent 
            dividers 
            sx={{
              display: "flex",
              flexDirection: "column"
              }}>
                <Controller
                    name="name"
                    control={control}
                    rules={{ required: true }}
                    render={({ field, fieldState }) => (
                    <>
                      <TextField
                        {...field}
                        required
                        error={fieldState.invalid}
                        id="outlined-required"
                        label="Nom du Robot"
                        helperText="le nom est obligatoire"
                      />
                    </>
                    )}
                  />
                <Controller
                  name="activity"
                  control={control}
                  render={({ field }) => 
                    <>
                      <Select 
                        {...field}
                      >
                        <MenuItem value='foo'>Foo</MenuItem>
                        <MenuItem value='bar'>Bar</MenuItem>
                          <MenuItem value='foobar'>Foobar</MenuItem>
                      </Select>

                    </>
                  }
                />
            </DialogContent>
            <DialogActions>
            <Button autoFocus type='submit'>
                Acheter
            </Button>
            </DialogActions>
        </form>
      </BootstrapDialog>
    </div>
  );
}
