import React from 'react'
import cn from 'classnames'
import Image from 'next/image'

const SearchBar = () => {
  return (
    <div className={cn('search-bar')}>
      <input placeholder='Бүтээгдхүүн хайх' />
      <div><Image src="/svg/Search.svg" height={18} width={18} alt="call" /></div>
    </div>
  )
}

export default SearchBar