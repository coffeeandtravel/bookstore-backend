

const filterBook = (query) => {
    let filter = {};
    if(query.category){
        filter.category = {$in: query.category.split(',')};
    }

    if(query.authorName){
        filter.authorName = {$regex: query.authorName, $options: 'i'};
    }
    if(query.bookTitle){
        filter.bookTitle = {$regex: query.bookTitle, $options: 'i'};
    }
    return filter;
};
module.exports = {filterBook};