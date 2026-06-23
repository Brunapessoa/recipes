import { useState } from "react"

type SearchFormProps = {
    submitTerm: (term: string) => void
}

function SearchForm({ submitTerm }: SearchFormProps) {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <form className="flex flex-col items-center gap-4 mt-5" 
        onSubmit={(e) => 
            {e.preventDefault();
            submitTerm(searchTerm)}
        }>
            <input className="bg-white px-5 py-1.5 rounded-full text-olive-800 text-center w-70 lg:w-100 focus:outline-lime-700/60" type="text" name="" id="" placeholder="Type the kind of recipe you want"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="bg-lime-800/60 text-white px-3 lg:px-8 py-1 rounded-full" type="submit">Search</button>
        </form>
    )
}

export default SearchForm