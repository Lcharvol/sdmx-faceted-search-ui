export const SEARCH = 'SEARCH';
export const FILTER = 'FILTER';
export const FACETEDSEARCH = 'FACETEDSEARCH';
export const MOVESIDEPANEL = 'SHOWSIDEPANEL';
export const search = value => ({ type: SEARCH, value });
export const filter = value => ({ type: FILTER, value });
export const facetedSearch = value => ({ type: FACETEDSEARCH, value });
export const moveSidePanel = () => ({ type: MOVESIDEPANEL });
