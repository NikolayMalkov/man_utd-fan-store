import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '250px',
        },
    },
}));

function SearchInput() {
 
    const Muiclasses = useStyles();

    const SearchTextField = withStyles({
        root: {
          '& label.Mui-focused': {
            color: 'green',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'red',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'red',
            },
            '&:hover fieldset': {
              borderColor: 'red',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'red',
            },
          },
        },
      })(TextField);

    return (

        <SearchTextField className={Muiclasses.root} id="outlined-basic" label="Search" variant="outlined" />

    )

}

export default SearchInput;