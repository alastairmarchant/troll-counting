import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    padding: '30px',
    display: 'grid',
    'grid-template-rows': '25vh 25vh auto auto',
    placeItems: 'center',
  },
  title: {

  },
  textField: {
    maxWidth: 200,
  },
  button: {},
  trollValue: {},
});

const Counter = (props) => {
  const classes = useStyles();
  const [decimalValue, setDecimalValue] = useState(1);
  const [trollValue, setTrollValue] = useState('Press convert to see!');

  const decimalToTroll = (value) => {

    if (Math.floor(value) === 0) {
      return 'nuffin\''
    }

    let trollNumber = [];
    let remainder = Math.floor(value);
    let hyphen = false;

    const lots = Math.floor(remainder/16);
    if (lots > 0) {
      trollNumber = trollNumber.concat(new Array(lots).fill('lots'))
      remainder -= 16 * lots;
    }

    const many = Math.floor(remainder/4);
    if (many > 0) {
      trollNumber = trollNumber.concat(new Array(many).fill('many'))
      remainder -= 4 * many;
    }

    switch (remainder) {
      case 0:
        hyphen = true;
        break;
      case 1:
        trollNumber.push('one');
        break;
      case 2:
        trollNumber.push('two');
        break;
      case 3:
        trollNumber.push('three');
        break;
      default:
        trollNumber.push('huh?');
        break;
    }

    return trollNumber.join(hyphen ? '-' : ' ')
  }

  const updateTroll = () => {
    setTrollValue(decimalToTroll(decimalValue))
  };

  return (
    <div className={classes.root}>
    <Typography
      variant="h2"
      component="h1"
      className={classes.title}
    >
      Troll Counting
    </Typography>
    <div>
      <Typography
        variant="h4"
        component="h2"
        className={classes.title}
      >
        Enter a number
      </Typography>
      <TextField
        id="decimal-number"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        value={decimalValue}
        onChange={(e) => setDecimalValue(e.target.value)}
        className={classes.textField}
      />
    </div>
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={updateTroll}
        className={classes.button}
      >
        Convert
      </Button>
    </div>
    <Typography
      variant="h6"
      component="p"
      className={classes.trollValue}
    >
      {trollValue}
    </Typography>
    </div>
  );
}

export default Counter;