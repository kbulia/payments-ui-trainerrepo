import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  LoginContext,
  LoginContextType,
  UserType,
} from "../../context/context";

const Menu = (): JSX.Element => {
  // if theuser is logged in, render their name
  // if not, then render sign in button

  // make it so that
  //if the user is logged in, render their name
  // if they are not logged in, render the login link

  const contextPointer = useContext<LoginContextType>(LoginContext);

  const userDetails: UserType = contextPointer.user;

  return (
    <ul className="nav">
      <li>
        <Link to="/find">Find a transaction</Link>
      </li>
      <li>
        <Link to="/add">New transaction</Link>
      </li>
      <li>
        {" "}
        <Link to="/signin">Sign In</Link>
      </li>
    </ul>
  );
};

export default Menu;
