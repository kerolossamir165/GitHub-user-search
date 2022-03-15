import first from "lodash/fp/first";
import flow from "lodash/fp/flow";

export const getSearchQuery = flow((url) => url.match(/(\?.+)/), first);
