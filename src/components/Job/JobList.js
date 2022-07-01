import React, { useContext } from "react";
import DUMMY_DATA from '../data.json';
import JobListItem from "./JobListItem";
import FilterContext from "../../store/filter-context";
import ActiveFilterList from "../Filter/ActiveFilterList";

const JobList = () => {
    const filterContext = useContext(FilterContext);

    let jobPostings = [];

    let hasActiveFilters = false;
    if (filterContext.filters.length > 0) {
        hasActiveFilters = true;
    }

    if (hasActiveFilters) {
        jobPostings = DUMMY_DATA.filter(job => {
            return filterContext.filters.every(filter => {
                return job.languages.includes(filter);
            });
        })
    } else {
        jobPostings = DUMMY_DATA;
    }

    return (
        <React.Fragment>
            {hasActiveFilters && <ActiveFilterList />}

            {jobPostings.map(job => (
                <JobListItem key={job.id} item={job} />
            ))}
        </React.Fragment>
    )
}

export default JobList;