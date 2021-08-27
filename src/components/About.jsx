import classes from '../css/about.module.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function About() {
    return (
        <div className={classes.wrap}>
            <div className={classes.info}>
                <h4>Information</h4>
                <p>contacts</p>
                <p>about us</p>
            </div>

            <div className={classes.info}>
                <h4>Customer Service</h4>
                <p>help</p>
                <p>track order</p>
            </div>

            <div className={classes.info}>
                <h4>Follow us</h4>
                <div>
                <InstagramIcon className={classes.icon}/>
                <TwitterIcon className={classes.icon}/>
                </div>
            </div>
        </div>
    )
}

