import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addSelectedItem} from '../../store/slices/selectedItemsSlice';
import MainTableRow from './MainTableRow';

const MainTable = () => {
    const {data, loading, selectedLocations} = useSelector(state => state.market);
    const dispatch = useDispatch();

    if (loading) return <div>Loading...</div>;

    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    {selectedLocations.map(loc => (
                        <th key={loc}
                            className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {loc}
                        </th>
                    ))}
                    <th className="px-6 py-3 bg-gray-50"></th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {data.map(item => (
                    <MainTableRow
                        key={item.id}
                        item={item}
                        onSelect={() => dispatch(addSelectedItem(item))}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};
