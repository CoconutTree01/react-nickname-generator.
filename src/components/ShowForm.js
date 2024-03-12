const ShowForm = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Surname: {props.surname}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default ShowForm;