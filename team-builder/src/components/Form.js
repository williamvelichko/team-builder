export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <div className="form-inputs">
        <label>
          Name
          <input
            name="name"
            type="text"
            placeholder="type your name here"
            value={values.name}
            onChange={onChange}
          />
        </label>
        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="type your email here"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>
          role
          <select value={values.role} name="role" onChange={onChange}>
            <option value="">-- Select a Role --</option>
            <option value="pointGaurd">PointGaurd</option>
            <option value="shootingGaurd">ShootingGaurd</option>
            <option value="smallForward">SmallForward</option>
            <option value="powerForward">PowerForward</option>
            <option value="center">Center</option>
          </select>
        </label>
        <div className="submit">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
}
