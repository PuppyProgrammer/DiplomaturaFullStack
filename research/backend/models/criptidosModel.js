var pool = require('./bd');

async function getCriptidos() {
    var query = 'select * from criptidos';
    var rows = await pool.query(query);
    return rows;
}

async function insertCriptido(obj) {
    try {
        var query = "insert into criptidos set ?";
        var rows = await pool.query(query, [obj])
        return rows;

    } catch (error) {
        console.log(error);
        throw error;
    } // cierra catch
} // cierra insert

async function deleteCriptidoById(id) {
    var query = 'delete from criptidos where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}
// modificar criptidos
async function getCriptidoById(id) {
    var query = 'select * from criptidos where id = ? ';
    var rows = await pool.query(query, [id]);
    return rows[0];
}

// para modificar UPDATE de los datos
async function modificarCriptidoById(obj, id) {
    try {
        var query = 'update criptidos set ? where id=?';
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getCriptidos, insertCriptido, deleteCriptidoById, getCriptidoById, modificarCriptidoById }
