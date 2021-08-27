import classes from '../css/content.module.css';
import SearchInput from '../inputs/SearchInput';
import ItemsCard from './ItemsCard';
import { Switch, Route } from 'react-router-dom';
import Kits from './Kits';
import Training from './Training';
import Women from './Women';


export default function Main() {



    return (
        <div className={classes.content_wrap}>

            <div className={classes.search_line}>
                <h3>Catalog</h3>

                <SearchInput />


            </div>

            <ItemsCard />

            <Switch>
                <Route path="/kits">
                    <Kits />
                </Route>
                <Route path="/train">
                    <Training />
                </Route>
                <Route path="/women">
                    <Women />
                </Route>
                <Route path="/cart">
                   
                </Route>
            </Switch>

        </div>


    )
}
