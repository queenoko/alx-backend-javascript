/* value set */
export default function hasValuesFromArray(set, list) {
  let varq = true;
  list.map((x) => {
    if (!set.has(x)) {
      varq = false;
    }
  });

  return varq;
}
