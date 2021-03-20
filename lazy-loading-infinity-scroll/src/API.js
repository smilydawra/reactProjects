export const getLocations = async (page) => {
    const locations = await (
        await fetch(`http://demo2020460.mockable.io/location?page=${page}`)
    ).json();
    return locations.locations;
}