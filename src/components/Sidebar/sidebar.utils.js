export function renderActivePath(path, activePath, child) {
  // if (path === activePath) {
  //   return activePath;
  // }

  console.log(path, activePath);

  const newActive = activePath.split("/");

  const final = {
    parent: `/${newActive[1]}`,
  };

  if (newActive[2]) {
    final.child = `/${newActive[2]}`;
  }

  delete newActive[0];
  delete newActive[1];
  delete newActive[2];

  newActive.forEach((item) => {
    final.children = renderActivePath(item, activePath, true);
  });

  final.path = activePath;

  return final;
}

export function isCurrentPath(children, activePath) {
  if (!children) return false;

  const open = children?.filter((item) => item.path === activePath.path);

  return open.length === 1;
}
