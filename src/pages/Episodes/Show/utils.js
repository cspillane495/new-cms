export const getMediaTitlesByType = (items, type) => {
    let newItems = [];

    if(!items) { 
        return newItems
    }
    const filteredItems = items.filter(item => {
        console.log(item, type, type.includes(item.category))

        return type.includes(item.category)
    });
    return filteredItems.map(item => {
        return {
            id: item.path,
            title: item.name
        }
    });
}
