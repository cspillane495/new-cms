import path from "path";

export const renderNavItems = (arr, child, parent) => {
  const routes = arr;
  const removeNonNavItems = routes.filter((item) => {
    return !item.removeFromMenu;
  });

  console.log(removeNonNavItems);

  // const mapFiltered = filteredItem.map((items) => {});
};

export const getChildWithParentPath = (arr, parentPath) => {
  const children = arr;

  return children.map((item, i) => {
    return {
      ...item,
      path: path.join(parentPath, item.path),
    };
  });
};

export const renderFlatMap = (arr) => {
  const routes = arr;
  const finalArr = [];

  routes.forEach((route) => {
    if (route.children) {
      finalArr.push(...getChildWithParentPath(route.children, route.path));
      delete route.children;
    }
    return finalArr.push(route);
  });

  return finalArr;
};
