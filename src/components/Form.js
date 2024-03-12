const Form = ({ name, surname, age, onChangeName, onChangeSurname, onChangeAge }) => {

    return (
      <form>
        <div>
          <label htmlFor="fname">First name: </label>
          <input
            type="text"
            id="name"
            onChange={onChangeName}
            value={name || ""}
          />
        </div>
        <div>
          <label htmlFor="sname">Surname: </label>
          <input
            type="text"
            id="surname"
            onChange={onChangeSurname}
            value={surname || ""}
          />
        </div>
        <div>
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            id="age"
            onChange={onChangeAge}
            value={age || ""}
          />
        </div>
      </form>
    );
  };

  export default Form;