import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Results() {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('/api/results')
            .then(response => {
                setResults(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    const addResult = (newResult) => {
        axios.post('/api/results', newResult)
            .then(response => {
                setResults([...results, response.data]);
            })
            .catch(error => {
                console.log(error);
            });
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Pages</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(result => (
                        <tr key={result.id}>
                            <td>{result.date}</td>
                            <td>{result.pages}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddResultForm onAddResult={addResult} />
        </div>
    );
}

function AddResultForm({ onAddResult }) {
    const [date, setDate] = useState('');
    const [pages, setPages] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newResult = { date, pages };
        onAddResult(newResult);
        setDate('');
        setPages('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a new result</h3>
            <label>
                Date:
                <input type="text" value={date} onChange={(event) => setDate(event.target.value)} />
            </label>
            <label>
                Pages:
                <input type="text" value={pages} onChange={(event) => setPages(event.target.value)} />
            </label>
            <button type="submit">Add</button>
        </form>
    );
}