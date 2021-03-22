import { CSSProperties } from "react"

export const SearchInput = () => {
    return (
        <div style={container}>
           <input style={inputStyle} placeholder="Search..." type="search" />
           <img src="/search.svg" alt="search"/> 
        </div>
    )
}

const container: CSSProperties = {
    backgroundColor: '#fff',
    padding: '14px 20px',
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
}

const inputStyle: CSSProperties = {
    flex: 1,
    outline: 'none',
    border: 'none',
    fontSize: 14, 
    color: 'var(--text-color)'
}