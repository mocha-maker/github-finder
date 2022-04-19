import { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/GithubActions'

import { FaSearch } from 'react-icons/fa'

function UserSearch() {
    const [text, setText] = useState('')

    // Get Context
    const { users, dispatch } = useContext(GithubContext)
    const { setAlert } = useContext(AlertContext)
    
    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(text === '') {
            setAlert('You must enter something','error')
        } else {
            dispatch({type: 'SET_LOADING'})
            const users = await searchUsers(text)
            dispatch({type: 'GET_USERS', payload: users})
            setText('')
        }
    }

    const handleClear = (e) => dispatch({type: 'CLEAR_USERS'})

    return (
        <div className='grid grid-cols-4 mb-8 gap-4'>
            <div className="search-form col-span-3">
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input 
                                type="text" 
                                className="w-full pr-40 bg-gray-200 input input-lg text-black" 
                                placeholder='Search'
                                value={text}
                                onChange={handleChange}/>
                            <button className="absolute top-0 right-0 rounded-l-none rounded-r-36 btn btn-lg"><FaSearch/></button>
                        </div>
                    </div>
                </form>
            </div>
            {users.length > 0 && (
                <div className="clear-button">
                    <button className="btn btn-ghost btn-lg" onClick={handleClear}>
                        Clear
                    </button>
                </div>
            )}
        </div>
    )
}

export default UserSearch