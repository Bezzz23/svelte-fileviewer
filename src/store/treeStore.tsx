import { writable } from 'svelte/store';

export const currentNodeKey = writable(0);

export const findNodeByKey = (element, key: number | null) => {
  if (element?.key === key) {
    return element;
  } else if (element.children !== null) {
    let result = null;
    for (let i = 0; result == null && i < element?.children?.length; i++) {
      result = findNodeByKey(element.children[i], key);
    }
    return result;
  }
  return null;
};
