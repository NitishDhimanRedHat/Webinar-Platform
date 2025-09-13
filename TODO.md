# TODO: Fix Duplicate Webinar Rendering

## Tasks
- [x] Add getAllWebinars() method in WebinarService to combine live, upcoming, and cardiology webinars.
- [x] Update WebinarPlatformComponent ngOnInit: set filteredWebinars to getAllWebinars().
- [x] Update applyFilters: only filter filteredWebinars from getAllWebinars().
- [x] Update resetFilters: only reset filteredWebinars to getAllWebinars().
- [x] Test the application to ensure no duplicates in UI.
