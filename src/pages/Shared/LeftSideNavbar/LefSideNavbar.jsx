
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LefSideNavbar = () => {

    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    },[])

    console.log(categories)

    return (
        <div className="sticky top-0">
            <h2 className="text-lg font-bold">All Category News : {categories.length}</h2>
            {
                categories.map(category => <Link className="space-y-4" to={`${category.id}`} key={category.id}><li className="list-none">{category.name}</li></Link>)
            }
        </div>
    );
};

export default LefSideNavbar;