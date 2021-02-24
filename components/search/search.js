import React, { useCallback, useRef, useState } from 'react'
import Link from 'next/link'

import searchStyles from './search.module.scss'

// based on https://github.com/matswainson/nextjs-blog-search-api
const Search = () => {

  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const searchEndpoint = (queryTerm) => `/api/search/?q=${queryTerm}`

  const onChange = useCallback((event) => {
    setQuery(event.target.value);

    if (event.target.value.length > 2) {
      fetch(searchEndpoint(event.target.value))
        .then(res => res.json())
        .then(res => {
          setResults(res.results);
        })
    } else {
      setResults([]);
    }
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false)
      window.removeEventListener('click', onClick)
    }
  }, [])

  const onFocus = useCallback(() => {
    setActive(true)
    window.addEventListener('click', onClick)
  }, []);

  return (
    <div className={searchStyles.search}>
      <form>
        <input 
          type="text"
          onChange={onChange}
          onFocus={onFocus}
          value={query}
          ref={searchRef}
          aria-label="Search term"
          placeholder="Search"
        />

        { active && results.length > 0 && (
          <ul>
            {results.map(({ id, title, date }) => (
              <li key={id}>
                <Link href="/posts/[id]" as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        ) }
      </form>
    </div>
  )
}

export default Search;