
const Journal = require('./models/Journal');

async function createJournalEntry(userId, journalEntry, entryBody) {
    return Journal.create({
      userId,
      journalEntry,
      entryBody,
    });
  }
  
  async function getAllJournalEntries() {
    return Journal.findAll();
  }
  
  async function getJournalEntryById(id) {
    return Journal.findByPk(id);
  }
  
  async function updateJournalEntry(id, updatedData) {
    return Journal.update(updatedData, {
      where: { id },
    });
  }

  async function deleteJournalEntry(id) {
    return Journal.destroy({
      where: { id },
    });
  }
  
  module.exports = {
    createJournalEntry,
    getAllJournalEntries,
    getJournalEntryById,
    updateJournalEntry,
    deleteJournalEntry,
  };
  