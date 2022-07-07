import JobList from './components/Job/JobList';
import Banner from './components/UI/Header/Banner';
import FilterProvider from './store/filter-provider';

function App() {
  return (
    <section>
      <Banner />
      <FilterProvider>
        <JobList />
      </FilterProvider>
    </section>
  );
}

export default App;
