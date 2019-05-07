import React from 'react';

const QueryHandler = ({loading, error}) => {
	if (loading) return <p>Loading…</p>;
	if (error) return <p>Error :(</p>;
}

export default QueryHandler;