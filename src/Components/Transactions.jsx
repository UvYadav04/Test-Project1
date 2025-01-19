'use client'

import React, { useState } from 'react';
import Card2 from './Card2';

function Transactions() {
    const [mapState, setMapState] = useState(
        new Map([
            ["id-0j9hfh74bf", false],
            ["id-0j9hfh75bf", false],
            ["id-0j9hfh76bf", true],
            ["id-0j9hfh77bf", false],
            ["id-0j9hfh78bf", true],
        ])
    );
    const [allselect, setallselect] = useState(false);

    // Function to select or deselect all checkboxes
    const selectall = () => {
        const updatedMap = new Map(mapState);
        updatedMap.forEach((_, key) => {
            updatedMap.set(key, !allselect); // Set all to true if allselect is false, and vice versa
        });
        setMapState(updatedMap);
        setallselect(!allselect); // Toggle allselect
    };

    // Function to toggle individual checkbox
    const check = (id) => {
        const updatedMap = new Map(mapState);
        updatedMap.set(id, !mapState.get(id)); // Toggle the value for the specific key
        setMapState(updatedMap);

        // Check if all items are selected; if not, set `allselect` to false
        const allSelected = Array.from(updatedMap.values()).every((value) => value === true);
        setallselect(allSelected);
    };

    return (
        <div className="w-full flex flex-col gap-20 place-items-center">
            <h1 className="flex-1 lg:ps-20 md:ps-16 sm:ps-10 text-start md:text-3xl text-2xl font-bold">
                Credits Purchase History
            </h1>
            <table className="md:w-11/12 w-full overflow-hidden">
                <thead>
                    <tr className="flex font-bold mb-5 justify-evenly max-w-[100vw] overflow-hidden">
                        <td className="min-w-fit w-16 text-center">
                            <input
                                onChange={selectall}
                                checked={allselect} // Use `checked` to make it controlled
                                className="text-3xl"
                                type="checkbox"
                            />
                        </td>
                        <td className="md:w-32 flex-1 text-start">Invoice</td>
                        <td className="md:w-32 flex-1 text-start">Status</td>
                        <td className="md:w-32 flex-1 text-start">Credit</td>
                        <td className="md:w-32 flex-1 text-start">Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <Card2 check={check} selected={mapState.get("id-0j9hfh74bf") || false} id="id-0j9hfh74bf" status="ok" credits={240} amount={1200} />
                    <Card2 check={check} selected={mapState.get("id-0j9hfh75bf") || false} id="id-0j9hfh75bf" status="ok" credits={200} amount={1500} />
                    <Card2 check={check} selected={mapState.get("id-0j9hfh76bf") || false} id="id-0j9hfh76bf" status="ok" credits={140} amount={800} />
                    <Card2 check={check} selected={mapState.get("id-0j9hfh77bf") || false} id="id-0j9hfh77bf" status="ok" credits={20} amount={100} />
                    <Card2 check={check} selected={mapState.get("id-0j9hfh78bf") || false} id="id-0j9hfh78bf" status="ok" credits={290} amount={1000} />
                </tbody>
            </table>
        </div>
    );
}

export default Transactions;
