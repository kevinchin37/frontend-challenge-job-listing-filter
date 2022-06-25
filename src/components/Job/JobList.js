import React, { useState } from "react";
import DUMMY_DATA from '../data.json';
import JobListItem from "./JobListItem";
import JobFilter from "./JobFilter";

const JobList = () => {
    const [filterLanguages, setfilterLanguages] = useState([]);

    let jobPostings = [];
    let filterHasItems = false;

    if (filterLanguages.length > 0) {
        filterHasItems = true;
    }

    if (filterLanguages.length !== 0) {
        jobPostings = DUMMY_DATA.filter(job => {
            return filterLanguages.every(filterLanguage => {
                return job.languages.includes(filterLanguage);
            });
        })
    } else {
        jobPostings = DUMMY_DATA;
    }

    const onFilterChangeHandler = (filterLanguage) => {
        setfilterLanguages((prevfilterLanguages) => {
            let updatedFilters = prevfilterLanguages;

            const existingFilterIndex = filterLanguages.findIndex(language => language == filterLanguage);
            if (existingFilterIndex < 0) {
                updatedFilters = [...prevfilterLanguages, filterLanguage];
            }

            return updatedFilters;
        });
    }

    const onRemoveFilterHandler = (filterLanguage) => {
        setfilterLanguages((prevfilterLanguages) => {
            const existingFilterIndex = prevfilterLanguages.findIndex(language => language == filterLanguage);
            const updatedfilter = prevfilterLanguages.filter((language, index) => index != existingFilterIndex);

            return updatedfilter;
        });
    }

    const onResetFilterHandler = () => {
        setfilterLanguages([]);
    }

    return (
        <React.Fragment>
            {filterHasItems && <JobFilter languages={filterLanguages}
                removeFilter={onRemoveFilterHandler}
                resetFilter={onResetFilterHandler}
            />}

            {jobPostings.map(job => (
                <JobListItem key={job.id} item={job} addToFilter={onFilterChangeHandler}/>
            ))}
        </React.Fragment>
    )
}

export default JobList;