const Input = ({
    id,
    onBlur,
    values,
    style,
    label,
    onChange,
    placeholder,
    type,
    inputType,
    icon,
    rows,
  }) => {
    return (
      <div className="flex flex-col gap-2 w-full group">
        <h1 className="text-sm font-medium">{label}</h1>
        {type === "input" ? (
          <div
            className={`${style} relative text-primary  duration-100 outline-none justify-between flex items-center gap-6 px-2  w-full rounded-md font-semibold border-2 group-hover:border-primary`}
          >
            {icon && <p>{icon}</p>}
  
            <input
              type={inputType}
              value={values}
              onBlur={onBlur}
              id={id}
              onChange={onChange}
              placeholder={placeholder}
              className="w-full h-full bg-transparent py-3 outline-none"
            />
          </div>
        ) : (
          <textarea
            name=""
            id={id}
            onBlur={onBlur}
            cols="30"
            rows={rows || 10}
            placeholder={placeholder}
            onChange={onChange}
            value={values}
            className="text-xs md:text-sm duration-150 w-full outline-none border-b rounded-xl border-2 group-hover:border-primary px-6 py-3"
          >
            {values}
          </textarea>
        )}
      </div>
    );
  };
  
  export default Input;