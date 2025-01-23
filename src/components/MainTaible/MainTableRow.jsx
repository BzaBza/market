import React from 'react';
import { useSelector } from 'react-redux';

const MainTableRow = ({ item, onSelect }) => {
    const { selectedLocations } = useSelector(state => state.market);

    return (
        <tr className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {item.name}
            </td>

            {selectedLocations.map(loc => (
                <td
                    key={`${item.id}-${loc}`}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                    {item.prices?.[loc] || '-'}
                </td>
            ))}

            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                    onClick={() => onSelect(item)}
                    className="text-indigo-600 hover:text-indigo-900"
                >
                    Select
                </button>
            </td>
        </tr>
    );
};

export default MainTableRow;