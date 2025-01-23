import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { getMarketData, setLocations } from './store/slices/marketSlice';
import MainTable from './components/MainTable/MainTable';
import SelectedTable from './components/SelectedTable/SelectedTable';
import { format } from 'date-fns';

const LOCATIONS = [
  "Fort Sterling",
  "Martlock",
  "Thetford",
  "Lymhurst",
  "Bridgewatch",
  "Caerleon"
].map(loc => ({ value: loc, label: loc }));

function App() {
  const dispatch = useDispatch();
  const { loading, error, selectedLocations } = useSelector(state => state.market);

  const [dates, setDates] = useState({
    from: format(new Date(Date.now() - 24 * 3600 * 1000), 'yyyy-MM-dd'),
    to: format(new Date(), 'yyyy-MM-dd')
  });

  useEffect(() => {
    if (selectedLocations.length > 0) {
      handleFetchData();
    }
  }, [selectedLocations]);

  const handleLocationSelect = (selected) => {
    dispatch(setLocations(selected.map(s => s.value)));
  };

  const handleFetchData = () => {
    dispatch(getMarketData({
      locations: selectedLocations,
      dateFrom: dates.from,
      dateTo: dates.to
    }));
  };

  return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl md:max-w-4xl lg:max-w-7xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-full mx-auto">
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-6 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="w-72">
                      <Select
                          isMulti
                          options={LOCATIONS}
                          value={selectedLocations.map(loc => ({ value: loc, label: loc }))}
                          onChange={handleLocationSelect}
                          className="select-container"
                          placeholder="Select locations..."
                      />
                    </div>

                    <input
                        type="date"
                        value={dates.from}
                        onChange={(e) => setDates(prev => ({ ...prev, from: e.target.value }))}
                        className="input"
                    />

                    <input
                        type="date"
                        value={dates.to}
                        onChange={(e) => setDates(prev => ({ ...prev, to: e.target.value }))}
                        className="input"
                    />

                    <button
                        onClick={handleFetchData}
                        disabled={loading}
                        className="button"
                    >
                      {loading ? (
                          <div className="flex items-center">
                            <svg className="loading-spinner mr-2" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                            </svg>
                            Loading...
                          </div>
                      ) : 'Fetch Data'}
                    </button>
                  </div>

                  {error && (
                      <div className="error-text">
                        {error}
                      </div>
                  )}

                  <div className="space-y-8">
                    <MainTable />
                    <SelectedTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;