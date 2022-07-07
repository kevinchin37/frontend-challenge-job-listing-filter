import { useContext } from 'react';
import Card from '../UI/Layout/Card';
import FilterContext from '../../store/filter-context';
import FilterItem from './FilterItem';
import { generateUniqueKey } from "../../helper";
import classes from './ActiveFilterList.module.css';

const ActiveFilterList = () => {
    const filterContext = useContext(FilterContext);

    return (
        <Card className={classes['filter-container']}>
            <main className={classes['filter-grid']}>
                <div className={classes.filters}>
                    {filterContext.filters.map((language) => (
                        <FilterItem
                            key={generateUniqueKey(language)}
                            language={language}
                            dismissable={true}
                        />
                    ))}
                </div>

                <span className={classes['clear-button']} onClick={filterContext.resetFilter}>Clear</span>
            </main>
        </Card>
    )
}

export default ActiveFilterList;