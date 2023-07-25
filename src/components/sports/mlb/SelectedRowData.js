import React from 'react';

function SelectedGamesBigData({ selectedRow }) {
    return (
        <div>
            {selectedRow ? (
                <div>
                    <h2>Selected Row Information</h2>
                    <p>MATCH UP: {selectedRow.matchUp}</p>
                </div>
            ) : (
                <p>No row selected</p>
            )}
        </div>
    );
}

export default SelectedGamesBigData;