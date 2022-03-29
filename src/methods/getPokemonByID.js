/* The code above is a function that returns a promise. The promise is resolved with a JSON object
containing the name, id, and form of a random pokemon. */
const config = require("../../resource/PokeList");

module.exports = async function getPokemonByID(id) {
    if (!id) throw new Error("\u001b[31;1m You must provide an id to search for a pokemon.");
    let data;
    if (isNaN(id)) {
        throw new Error("\u001b[31;1m Looks like you put a string for the id instead of an integer. If you would like to search for a pokemon via name. Consider using the getPokemonByName method");
    } else {
        data = config[parseInt(id)];
    }
    if (!data) throw new Error(`\u001b[31;1m No pokemon found with id ${id}`);
    return data;
};