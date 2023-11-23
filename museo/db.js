const mysql = require('mysql2/promise');

async function main() {
    let conn;
    try {
        conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '7g30Icj5',
            database: 'museo'
        });
        console.log('Conexión correcta');

        // Obtener un listado de todos los objetos que el museo tiene en préstamo, 
        // su localización dentro de la exposición, la fecha de expiración de este, 
        // la información básica (nombre, apellidos y email) de la persona que los 
        // ha prestado.

        // let params = ["2"];
        // let sql = `SELECT id_pieza, nombre_pieza, nombre_localizacion, fecha_devolucion, nombre_duenyo, 
        //             apellido_duenyo, email_duenyo
        //             FROM piezas AS p
        //             JOIN colecciones AS c ON (p.id_coleccion = c.id_coleccion)
        //             JOIN localizacion_coleccion AS lc ON (c.id_localizacion_coleccion = lc.id_localizacion)
        //             JOIN datos_prestacion AS dp ON (p.id_datos_prestacion = dp.id_datos_prestacion)
        //             JOIN duenyo AS d ON (dp.id_duenyo = d.id_duenyo)
        //             WHERE id_estado = ?`;
        // conn.query(sql, params, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }   
        // });

        // Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas 
        // agrupados por su situación dentro de la organización, esto es, cuántos hay expuestos, 
        // cuántos en itinerancia y cuántos almacenados.

        // let sql = `SELECT nombre_formato AS situación, COUNT(id_pieza) AS num_piezas
        //             FROM piezas AS p
        //             JOIN colecciones AS c ON (p.id_coleccion = c.id_coleccion)
        //             JOIN formato_coleccion AS fc ON (c.id_formato_coleccion = fc.id_formato)
        //             GROUP BY nombre_formato
        //             ORDER BY num_piezas DESC`;
        // conn.query(sql, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }   
        // });

    } catch (err) {
        console.log(err);
        await conn.end();
    }
}

main();
