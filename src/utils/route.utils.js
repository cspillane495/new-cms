import path from "path";

export const renderNavItems = (arr, child, parent) => {
  const routes = arr;
  const removeNonNavItems = routes.filter((item) => {
    if (item.children) {
      item.children.filter((child) => !child.removeFromMenu);
    }
    return !item.removeFromMenu;
  });
  const mapFiltered = removeNonNavItems.map((item) => {
    if (item.children) {
      return {
        path: item.path,
        title: item.title,
        icon: item.icon,
        children: renderNavItems(
          getChildWithParentPath(item.children, item.path)
        ),
      };
    }
    return {
      icon: item.icon,
      path: item.path,
      title: item.title,
    };
  });

  return mapFiltered;
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
    }
    return finalArr.push(route);
  });

  return finalArr;
};
