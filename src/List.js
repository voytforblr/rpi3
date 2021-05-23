import React from 'react';
import Header from 'components/Header'
import { Link } from 'react-router-dom'
import JSONDATA from 'MOCK_DATA.json'
import { useState } from 'react'

export default function List() {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div>
            <Header />
            <div class="container">
                <div class="input-group rounded" id="search">
                    <input type="search" class="form-control rounded" placeholder="Поиск" aria-label="Search"
                        aria-describedby="search-addon"
                        onChange={event => { setSearchTerm(event.target.value) }} />
                    <span class="input-group-text border-0" id="search-addon">
                        <button type="submit" id="btn-search">
                            <i class="fas fa-search"></i>
                        </button>
                    </span>
                </div>
                <ul class="list-group">
                    {JSONDATA.filter((val) => {
                        if (searchTerm == "") {
                            return val
                        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return val
                        }
                    }).map((val, key) => {
                        return <li class="list-group-item" key={key}><a><Link to={val.link}>{val.first_name} {val.last_name}</Link></a></li>
                    })}
                </ul>
            </div>
        </div>
    );
}