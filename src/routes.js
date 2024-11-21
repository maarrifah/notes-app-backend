const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler, editNoteByIdHandler, deleteNoteByIdHandler } = require('./handler');

const routes = [
  {
    // menambahkan notes
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    // menampilakn semua note
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    // menampilkan note sesuai id (notenya)
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    // mengubah note
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    // menghapus note
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;