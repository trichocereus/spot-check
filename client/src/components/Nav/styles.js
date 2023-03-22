import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    background: 'rgba(225,225,225)'
  },
  heading: {
    color: 'rgba(75,75,75)',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },
}));