import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function AlignItemsList() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        borderRadius: '10px',
        maxHeight: '40vh',
        paddingY: '30px',
        bgcolor: 'rgba(0, 0, 0, 0.6)',
        color: '#fff',
      }}
    >
      <List sx={{ 
        width: '90%', 
        overflow: 'auto',
        maxHeight: '40vh',
        bgcolor: 'transparent',
        color: 'inherit',
        paddingRight: '6px',
        '&::-webkit-scrollbar': {
            width: '3px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'primary.main',
            borderRadius: '2px',
        },
        }}
        >
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
                <Typography variant="body1" fontWeight="bold">
                  Peter's Team Graduating
                </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="#fff"
                >
                  Ali Connors
                </Typography>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="#fff"
                >
                {' — Do you have Paris recommendations? Have you ever…'}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="fullWidth" component="li" sx={{ backgroundColor: '#fff' }} />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
                <Typography variant="body1" fontWeight="bold">
                  Fatimah Success Story
                </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="#fff"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="#fff"
                >
                {' — Do you have Paris recommendations? Have you ever…'}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="fullWidth" component="li" sx={{ backgroundColor: '#fff' }} />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
                <Typography variant="body1" fontWeight="bold">
                  Parent Meeting
                </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="#fff"
                >
                  Sandra Adams
                </Typography>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="#fff"
                >
                {' — Do you have Paris recommendations? Have you ever…'}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="fullWidth" component="li" sx={{ backgroundColor: '#fff' }} />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
                <Typography variant="body1" fontWeight="bold">
                  Half Yearly Examination
                </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="#fff"
                >
                  Sandra Adams
                </Typography>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="#fff"
                >
                {' — Do you have Paris recommendations? Have you ever…'}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="fullWidth" component="li" sx={{ backgroundColor: '#fff' }} />
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={
                <Typography variant="body1" fontWeight="bold">
                  Christmas Day Holiday
                </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="#fff"
                >
                  Sandra Adams
                </Typography>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="#fff"
                >
                {' — Do you have Paris recommendations? Have you ever…'}
                </Typography>
                
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="fullWidth" component="li" sx={{ backgroundColor: '#fff' }} />
      </List>
    </Box>
  );
}
