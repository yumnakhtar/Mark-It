import React from "react"

const Tester = props => (

/////this form helps create a new category
    // <form onSubmit={props.handleSubmit}>
    //     <label>
            
    //         Category to add:
    //         <input type="text" value={props.value} onChange={props.handleChange}/>
    //     </label>
    // </form>

//this form helps delete a category
    <form onSubmit={props.handleDelete}>
        <label>
            
            Category to delete:
            <input type="text" value={props.value} onChange={props.handleChange}/>
        </label>
    </form>
)


export default Tester