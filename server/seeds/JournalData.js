const { Journal } = require('../models');

const JournalData = [
    {
        "userId": "1001001010111011010",
        "JournalEntryName": "First Journal Entry",
        "JournalBody": "toast and fish"
      },
      {
        "userId": "100100101001001010",
        "JournalEntryName": "Second Journal Entry",
        "JournalBody": "Wine, steak"
      },
      {
        "userId": "100010010010011010",
        "JournalEntryName": "Third Journal Entry",
        "JournalBody": "rice, water"
      }
]


const SeedJournal = () => Journal.bulkCreate(JournalData);

module.exports = SeedJournal;