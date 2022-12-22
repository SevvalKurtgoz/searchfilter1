import {Users} from './users.js';
import "./app.css"
import {useState} from "react";
import Table from "./Table";


function App() {
    const [query, setQuery] = useState("")
    const searchableFields = ["first_name", "last_name", "email"]
    const search = (users) => {
        return users.filter((user) => {
            return searchableFields.some(field => user[field].toLowerCase().includes(query))
        })
    }

    return (
        <div className="App">
            <input type="text" placeholder="Search..." className="search" onChange={e => setQuery(e.target.value)}/>
            <Table data={search(Users)}/>
        </div>
    );
}

export default App;