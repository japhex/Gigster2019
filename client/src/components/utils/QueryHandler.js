import React from 'react';
import Loader from './Loader'

const QueryHandler = ({loading, error}) => {
	if (loading) return <Loader />;
	if (error) return <p>Error :(</p>;
}

export default QueryHandler;