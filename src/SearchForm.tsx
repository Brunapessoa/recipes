import { useState } from "react"

type SearchFormProps = {
    submitTerm: (term: string) => void
}

function SearchForm({ submitTerm }: SearchFormProps) {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <form action="" 
        onSubmit={(e) => 
            {e.preventDefault();
            submitTerm(searchTerm)}
        }>
            <label htmlFor="">Recipe: </label>
            <input type="text" name="" id="" placeholder="Type the kind of recipe you want"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm