import React from 'react';
import Item from '../product/Item';

function SearchResults({ searchResults }) {
  return (
    <div className="mx-auto">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 mx-auto">
        {searchResults.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default SearchResults;
