import React, { useContext, useEffect, useState } from "react";
import DUMMY_DATA from '../data.json';
import JobListItem from "./JobListItem";
import FilterContext from "../../store/filter-context";
import ActiveFilterList from "../Filter/ActiveFilterList";
import Spinner from "../UI/Layout/Spinner";

const JobList = () => {
    const filterContext = useContext(FilterContext);
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    let hasActiveFilters = filterContext.filters.length > 0 ? true : false;

    useEffect(() => {
        let filterSetTimer;

        if (hasActiveFilters) {
            setIsLoading(true);

            /*
                Job list shouldn't re-render immediately on the event of a filter being clicked.
                This would especially be helpful if data was being fetched instead as it would help lessen api calls.
                Added a debounce of 1.5 secs to give more time to apply filters.
            */
            filterSetTimer = setTimeout(() => {
                const filteredJobs = DUMMY_DATA.filter(job => {
                    return filterContext.filters.every(filter => {
                        return job.languages.includes(filter);
                    });
                });

                setJobs(filteredJobs);
                setIsLoading(false);
            }, 1500);

        } else {
            setJobs(DUMMY_DATA);
            setIsLoading(false);
        }

        return () => {
            clearTimeout(filterSetTimer);
        }
    }, [filterContext.filters]);

    return (
        <React.Fragment>
            {hasActiveFilters && <ActiveFilterList />}

            {isLoading && <Spinner>Applying Filters</Spinner>}

            {jobs.map(job => (
                <JobListItem key={job.id} item={job} />
            ))}
        </React.Fragment>
    )
}

export default JobList;