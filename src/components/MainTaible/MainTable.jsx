// components/MainTable/MainTable.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSelectedItem } from '../../store/slices/selectedItemsSlice';
import MainTableRow from './MainTableRow';

const MainTable = () => {
    const { data, loading, selectedLocations } = useSelector(state => state.market);
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
                        <th key={loc} className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
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

// components/SelectedTable/SelectedTable.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import SelectedTableRow from './SelectedTableRow';

const SelectedTable = () => {
    const { items } = useSelector(state => state.selectedItems);
    const { selectedLocations } = useSelector(state => state.market);

    return (
        <div className="w-full overflow-x-auto mt-8">
            <h2 className="text-lg font-semibold mb-4">Selected Items</h2>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    {selectedLocations.map(loc => (
                        <th key={loc} className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            {loc}
                        </th>
                    ))}
                    <th className="px-6 py-3 bg-gray-50"></th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {items.map(item => (
                    <SelectedTableRow key={item.id} item={item} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

// components/SelectedTable/SelectedTableRow.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateItemPrice, removeSelectedItem } from '../../store/slices/selectedItemsSlice';

const SelectedTableRow = ({ item }) => {
    const dispatch = useDispatch();
    const { selectedLocations } = useSelector(state => state.market);

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item.name}
            </td>
            {selectedLocations.map(loc => (
                <td key={`${item.id}-${loc}`} className="px-6 py-4 whitespace-nowrap">
                    <input
                        type="number"
                        value={item.prices[loc] || ''}
                        onChange={(e) => dispatch(updateItemPrice({
                            itemId: item.id,
                            location: loc,
                            price: e.target.value
                        }))}
                        className="w-24 text-sm rounded-md border-gray-300"
                    />
                </td>
            ))}
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                    onClick={() => dispatch(removeSelectedItem(item.id))}
                    className="text-red-600 hover:text-red-900"
                >
                    Remove
                </button>
            </td>
        </tr>
    );
};