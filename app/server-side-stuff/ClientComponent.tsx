'use client';

import superjson from 'superjson';

const ClientComponent = ({ date }) => {
  const dateObject = superjson.parse(date);
  return <div className="text-white">{dateObject.toString()}</div>;
  // return null
};
export default ClientComponent;
