import React from 'react';

export default function SearchBar(props) {
  const { placeholder, onKeyPress, _ref } = props;

  return <div className="ui icon input fluid">
    <input type="text" placeholder={placeholder} ref={_ref} onKeyPress={onKeyPress} />
    <i className="search icon"></i>
  </div>;
}
