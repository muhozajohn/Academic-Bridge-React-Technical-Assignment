import { Link } from "react-router-dom";

const Button = ({ path, click, title, icon, styles , target , onChange }) => {
  return (
    <Link
      target={target}
      type="submit"
      onChange={onChange}
      rel="noopener noreferrer"
      to={path}
      onClick={click}
      className={`${styles}  border border-primary text-primary px-6 py-3 rounded-md flex justify-center items-center gap-2 text-sm hover:bg-primary hover:text-white duration-150 hover:scale-100 scale-95`}
    >
      {title} {icon}
    </Link>
  );
};

export default Button;