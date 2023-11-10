const { Logbook } = require('../models');

const LogbookData = [
    {
        "userId": "1001001010111011010",
        "logbookName": "First entry",
        "logbookBody": "Eggs, toast, white bread, and fish"
      },
      {
        "userId": "100100101001001010",
        "logbookName": "Second Entry",
        "logbookBody": "Wine, steak, mushrooms"
      },
      {
        "userId": "100010010010011010",
        "logbookName": "Third Entry",
        "logbookBody": "chicken, parmesian, rice, water"
      }
]


const SeedLogbook = () => Logbook.bulkCreate(LogbookData);

module.exports = SeedLogbook;