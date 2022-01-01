import Realm from "realm";

class BookSchema extends Realm.Object { }

BookSchema.schema = {
    name: 'Library',
    properties: {
        recordID: "int",
        BookName: "string",
        AuthorName: "string",
        Description: "string",
    },

}

let realm = new Realm({ schema: [BookSchema], schemaVersion: 4 });
let getAllBooks = () => {
    return realm.objects('Library');
}
let addBook = (_recordID, _BookName, _AuthorName, _Description) => {
    realm.write(() => {
        const Library = realm.create('Library', {
            recordID: _recordID,
            BookName: _BookName,
            AuthorName: _AuthorName,
            Description: _Description,
        });
    });
}
let deleteBook = () => {
    realm.write(() => {
        realm.delete(getAllBooks());
    });
};


export default realm;

export {
    getAllBooks,
    deleteBook,
    addBook
}