import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import '../App.css';
import {useEffect, useState, Fragment} from 'react';

export default function Asynchronous({setInfo}) {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;
    const serverUrl = "http://localhost:3001/programs";

    /* When the user presses the Autocomplete dropdown the programs
    will be fetched and loaded into the Dropdown. When selecting an option
    it will use the prop "setInfo" to store the selected one so that it can be
    displayed in the InfoBox component.*/

    /* *Optional* The data could be fetched once when loading the page.*/
    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await fetch(serverUrl, {
                method: 'GET',
                mode: 'cors'});
            const data = await response.json();

            if (active) {
                setOptions(Object.keys(data).map((key) => data[key]));
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        
        <Autocomplete
            id="async ComboBox"
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}    
            getOptionSelected={(option, value) => option.title === value.title}
            getOptionLabel={(option) => option.title}
            onChange={(option, value) => {
                if (value != null) {
                    setInfo({
                        title: value.title, 
                        desc: value.description, 
                        instructor: value.instructor.name.first + " " + value.instructor.name.last, 
                        Img: value.instructor.imageUrl,
                        quote: value.instructor.quote
                    })
                }else return null;
            }}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Program"
                    variant="outlined"
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <Fragment>
                                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                {params.InputProps.endAdornment}
                            </Fragment>
                        ),
                    }}
                />
            )}
        />
    );
}