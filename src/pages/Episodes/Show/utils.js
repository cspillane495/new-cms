export const getMediaTitlesByType = (items, type) => {
    // console.log(items, type)
    let newItems = [];
    if(!items) { 
        return newItems
    }
    return items.map(item => {
        return {
            id: item.path,
            title: item.name
        }
    })
}