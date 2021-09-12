import React from "react";
import CheckboxTree from "react-checkbox-tree";

import "react-checkbox-tree/lib/react-checkbox-tree.css";

const nodes = [
  {
    value: "home",
    label: "Home",
    children: [
      {
        value: "documents",
        label: "Documents",
        children: [
          {
            value: "office",
            label: "Office",
            children: [
              { value: "public", label: "Public" },
              { value: "private", label: "Private" },
              { value: "general", label: "General" },
            ],
          },
        ],
      },
      {
        value: "downloads",
        label: "Downloads",
        children: [
          { value: "public1", label: "Public" },
          { value: "private1", label: "Private" },
          { value: "general1", label: "General" },
        ],
      },
    ],
  },
];

export const Tree = () => {
  const [state, setState] = React.useState({
    checked: [],
    expanded: [],
  });

  return (
    <CheckboxTree
      nodes={nodes}
      checked={state.checked}
      expanded={state.expanded}
      onCheck={(checked) => setState(state => ({...state, checked }))}
      onExpand={(expanded) => setState(state => ({...state, expanded }))}
    />
  );
};
