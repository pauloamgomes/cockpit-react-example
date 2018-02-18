import getMuiTheme from 'material-ui/styles/getMuiTheme';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Colors from 'material-ui/styles/colors';

const getTheme = () => {
  let overwrites = {
    fontFamily: 'Encode Sans Expanded, sans-serif',
    palette: {
      primary1Color: Colors.lightBlue500,
      primary2Color: Colors.blue800,
      textColor: Colors.lightBlack
    }
  };
  return getMuiTheme(baseTheme, overwrites);
};

const Mui = getTheme();

export default Mui;
