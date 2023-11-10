const Logbook = require('./models/Logbook');

async function createLogbookEntry(userId, logbookName, logbookBody) {
  return Logbook.create({
    userId,
    logbookName,
    logbookBody,
  });
}

async function getAllLogbookEntries() {
  return Logbook.findAll();
}

async function getLogbookEntryById(id) {
  return Logbook.findByPk(id);
}

async function updateLogbookEntry(id, updatedData) {
  return Logbook.update(updatedData, {
    where: { id },
  });
}

async function deleteLogbookEntry(id) {
  return Logbook.destroy({
    where: { id },
  });
}

module.exports = {
  createLogbookEntry,
  getAllLogbookEntries,
  getLogbookEntryById,
  updateLogbookEntry,
  deleteLogbookEntry,
};
