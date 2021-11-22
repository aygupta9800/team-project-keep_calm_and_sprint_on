import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

export const ColorButton = withStyles(() => ({
  root: {
    color: '#222',
    backgroundColor: '#87cefa',
    '&:hover': {
      backgroundColor: '#87cefa',
      opacity: '0.9',
    },
  },
}))(Button);

export const ColorButton2 = withStyles(() => ({
  root: {
    color: '#222',
    backgroundColor: '#87cefa',
    '&:hover': {
      backgroundColor: '#87cefa',
      opacity: 0.9,
    },
  },
}))(Button);

export const ColorButton3 = withStyles(() => ({
  root: {
    color: 'white',
    backgroundColor: '#222',
    textTransform: 'none',
    '&:hover': {
      opacity: 0.6,
    },
  },
}))(Button);

export const ColorButton4 = withStyles(() => ({
  root: {
    color: '#222',
    backgroundColor: 'orange',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'orange',
      opacity: 0.9,
    },
  },
}))(Button);

export const airports = [
  'San Jose',
  'Phoenix',
  'Birmingham',
  'San Francisco',
  'Colorado Springs',
  'New Haven',
  'Melbourne',
  'Tallahasse',
  'Savannah',
  'Honolulu',
  'Indianapolis',
]


