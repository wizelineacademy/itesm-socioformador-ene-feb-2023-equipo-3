import React from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

interface SearchBarProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onChange, value }) => {
  return (
    <div className = "search-bar">
        <TextField
            label="Buscar"
            variant="outlined"
            size="small"
            fullWidth
            value={value}
            onChange={onChange}
            InputProps={{
                startAdornment: <SearchIcon />,
            }}
        />
    </div>
  );
};

export default SearchBar;
