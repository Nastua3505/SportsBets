import { AppData } from "../../constants";
import { filterAndSortItems } from "../../utils";
import Item from "../Item/Item";

import "./List.css";

export const sortedAndFilteredItems = filterAndSortItems(AppData);

const List = () => {
  return (
    <ul className="bet-list">
      {sortedAndFilteredItems.map((item, id) => (
        <Item key={id} id={id} item={item} />
      ))}
    </ul>
  );
};

export default List;
