import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

export default function Menu() {
  const menu = useLoaderData();

  return <h1>
    {menu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />)}
  </h1>
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}