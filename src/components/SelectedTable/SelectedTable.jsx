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
