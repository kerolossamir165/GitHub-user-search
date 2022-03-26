import first from "lodash/fp/first";
import flow from "lodash/fp/flow";

// flow accept function pass the element and generate new composite function (do some operations  ) and if the returnde value is array frist return the first element
export const getSearchQuery = flow((url) => url.match(/(\?.+)/), first);
