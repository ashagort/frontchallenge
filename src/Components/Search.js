import React, { useState } from 'react'
import axios from 'axios'

import './Search.css'

export const Search = () => {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState([])

  const filterResults = (results) => {
    if (results.length > 0) {
      const resultFilter = ((results.filter(item => item.name.includes(query))) && (results.filter(item => item.name.toLowerCase().indexOf(query.toLowerCase()) >= 0)))
      setResult(resultFilter)
    } else {
      setResult([])
    }
  }

  const fetchSearchResults = async (resultQuery) => {
    const searchURL = `https://rickandmortyapi.com/api/character/?name=${resultQuery}`
    let response = []

    try {
      response = await axios.get(searchURL)
    } catch (e) {
      console.error(e, 'Error network')
    }

    filterResults(response.data.results)
  }

  const handleOnInputChange = (event) => {
    const queryTarget = event.target.value

    if (!query) {
      setQuery(queryTarget)
      setResult([])
    } else {
      setQuery(queryTarget)
      fetchSearchResults(query)
    }
  }

  const renderResult = () => {
    if (query !== '') {
      return result.map((element, index) => {
        return (
                    <p key={index}>{element.name}</p>
        )
      })
    }
  }

  return (
        <div className={'search_container'}>
            {/* Search Input */}
            <p className={'search_title'}>Encuentra profesionales de confianza</p>
            <label className="search-label" htmlFor="search-input">
                <input
                    className={'search_input'}
                    type="text"
                    value={query}
                    id="search-input"
                    placeholder="Qué necesitas..."
                    onChange={handleOnInputChange}
                />
                <i className="fa fa-search search-icon"/>
            </label>
            {renderResult()}
        </div>
  )
}
