import React, {useContext, useState} from 'react';
import {AlertContext} from "../context/alert/alertContext";
import {GithubContext} from "../context/github/githubContext";

const Search = () => {
    const [value, setValue] = useState('')
    const {show, hide} = useContext(AlertContext)
    const github = useContext(GithubContext)

    const onSubmit = event => {
        if (event.key !== 'Enter') {
            return
        }
        github.clearUsers()
        if (value.trim()) {
            github.search(value.trim())
            hide()
        } else {
            show('Enter username')
        }


    }

    return (
        <div className='form-group'>
            <input
                type="text"
                className='form-control'
                placeholder='Enter username'
                value={value}
                onChange={event => setValue(event.target.value)}
                onKeyPress={onSubmit}
            />

        </div>
    );
};

export default Search;