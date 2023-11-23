const mysql = require('mysql2/promise');

async function main() {
    let conn;
    try {
        conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '7g30Icj5',
            database: 'dia1'
        });
        console.log('Conexión correcta');

        // let sql = `INSERT INTO teachers (first_name, last_name) VALUES ("Ana", "García Martínez")`;

        // let sql = `INSERT INTO teachers (first_name, last_name) 
        //             VALUES 
        //             ("Juan", "López Rodríguez"),
        //             ("María", "Fernández Pérez"),
        //             ("Luis", "González Ramírez"),
        //             ("Laura", "Díaz Sánchez"),
        //             ("Carlos", "Martínez Ruiz"),
        //             ("Patricia", "Torres Jiménez"),
        //             ("Jorge", "Soto Vargas"),
        //             ("Carmen", "Herrera Castro"),
        //             ("Sergio", "Mendoza Flores")`;

        // let sql = `INSERT INTO subjects (title)
        //             VALUES 
        //             ("HTML"),
        //             ("CSS"),
        //             ("JavaScript"),
        //             ("Node.js"),
        //             ("React"),
        //             ("Express.js"),
        //             ("MongoDB"),
        //             ("SQL"),
        //             ("Git"),
        //             ("Responsive Design")`;

        // let sql = `INSERT INTO \`groups\` (name) VALUES ("Presencial"), ("Online")`;

        // let sql = `INSERT INTO subject_teacher (subject_id, teacher_id, group_id) 
        //             VALUES 
        //             (1, 1, 1),
        //             (2, 1, 1),
        //             (3, 2, 1),
        //             (4, 2, 1),
        //             (5, 3, 1),
        //             (6, 2, 1),
        //             (7, 4, 1),
        //             (8, 5, 1),
        //             (9, 6, 1),
        //             (10, 1, 1),
        //             (1, 7, 2),
        //             (2, 7, 2),
        //             (3, 8, 2),
        //             (4, 8, 2),
        //             (5, 3, 2),
        //             (6, 8, 2),
        //             (7, 4, 2),
        //             (8, 9, 2),
        //             (9, 10, 2),
        //             (10, 7, 2)`;

        // let sql = `INSERT INTO students (first_name, last_name, group_id) 
        //             VALUES
        //             ('Juan', 'Pérez', 1),
        //             ('María', 'González', 1),
        //             ('Carlos', 'López', 2),
        //             ('Laura', 'Martínez', 2),
        //             ('Pedro', 'Rodríguez', 1),
        //             ('Ana', 'Herrera', 2),
        //             ('Jorge', 'Díaz', 1),
        //             ('Carmen', 'Sánchez', 2),
        //             ('Luis', 'Ramírez', 1),
        //             ('Patricia', 'Torres', 1)`;

        // let sql = `INSERT INTO marks (student_id, subject_id, date, mark) 
        //             VALUES
        //             (1, 3, '2023-11-22', 10),
        //             (1, 5, '2023-11-22', 6),
        //             (2, 10, '2023-11-23', 9),
        //             (2, 3, '2023-11-23', 9),
        //             (3, 1, '2023-11-24', 7),
        //             (3, 3, '2023-11-24', 10),
        //             (3, 9, '2023-11-25', 4),
        //             (4, 1, '2023-11-25', 6),
        //             (5, 3, '2023-11-26', 7),
        //             (5, 10, '2023-11-22', 5),
        //             (6, 3, '2023-11-23', 10),
        //             (6, 5, '2023-11-23', 10),
        //             (6, 6, '2023-11-24', 8),
        //             (7, 9, '2023-11-24', 9),
        //             (8, 9, '2023-11-25', 7),
        //             (9, 8, '2023-11-25', 5),
        //             (9, 9, '2023-11-26', 2),
        //             (9, 10, '2023-11-26', 4)`;

        // let sql = `INSERT INTO direccion (calle, numero, ciudad, CP) 
        //             VALUES
        //             ("Calle de la Paz", 10, "Madrid", '28004'),
        //             ("Avenida Diagonal", 123, "Barcelona", '08018'),
        //             ("Calle Mayor", 45, "Valencia", '46002'),
        //             ("Plaza Nueva", 8, "Sevilla", '41001'),
        //             ("Calle Gran Vía", 22, "Bilbao", '48001')`;

        // let [result] = await conn.query(sql);
        // console.log("Dato insertado");
        // console.log(result);

        // let sql = "ALTER TABLE direccion ADD COLUMN pais VARCHAR(45) AFTER ciudad";

        // let [result] = await conn.query(sql);
        // console.log("Columna insertada");
        // console.log(result);

        // let sql = "ALTER TABLE direccion DROP COLUMN numero";

        // let [result] = await conn.query(sql);
        // console.log("Columna eliminada");
        // console.log(result);

        // let sql = "DROP TABLE direccion";

        // let [result] = await conn.query(sql);
        // console.log("Tabla eliminada");
        // console.log(result);

        // let sql = "UPDATE marks SET mark = 0";

        // let [result] = await conn.query(sql);
        // console.log("Dato actualizado");
        // console.log(result);

        // let sql = "SELECT first_name, last_name FROM students";

        // let [result] = await conn.query(sql);
        // console.log("Datos obtenidos");
        // console.log(result);

        // let sql = "SELECT * FROM teachers";

        // let [result] = await conn.query(sql);
        // console.log("Datos obtenidos");
        // console.log(result);

        // let sql = "DELETE FROM marks WHERE date < CURDATE() - INTERVAL 10 YEAR";

        // let [result] = await conn.query(sql);
        // console.log("Datos eliminados");
        // console.log(result);

        // let sql = "UPDATE marks SET mark = 5 WHERE mark < 5";

        // let [result] = await conn.query(sql);
        // console.log("Dato actualizado");
        // console.log(result);




        // Retos dia2

        // let params = ["1"];
        // let sql = "SELECT AVG(mark) FROM marks WHERE subject_id = ?";
        // conn.query(sql, params, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }   
        // });

        // let sql = "SELECT COUNT(*) FROM students";
        // conn.query(sql, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }
        // });

        // let sql = "SELECT * FROM `groups`";
        // conn.query(sql, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }
        // });

        // let params = ["5", "1"];
        // let sql = "DELETE FROM marks WHERE mark > ? AND YEAR(date) = YEAR(CURDATE()) - ?";
        // await conn.query(sql, params, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }
        // });

        // let sql = "ALTER TABLE students ADD COLUMN enrollment_year INT";
        // conn.query(sql, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }
        // });

        // let sql = "SELECT * FROM students WHERE enrollment_year = YEAR(CURDATE())";
        // conn.query(sql, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }
        // });

        // let sql = `SELECT subject_id, COUNT(teacher_id) AS num_teahchers 
        //             FROM subject_teacher GROUP BY subject_id`;
        // conn.query(sql, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }
        // });

        // let params = ["1", "20", "8", "2022"];
        // let sql = `SELECT student_id, mark FROM marks
        //             WHERE (student_id >= ? AND student_id <= ?)
        //             OR (mark > ? AND YEAR(date) = ?)`;
        // await conn.query(sql, params, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }
        // });

        // let sql = `SELECT subject_id, AVG(mark) AS average_mark FROM marks WHERE YEAR(date) = YEAR(CURDATE()) 
        //             GROUP BY subject_id`;
        // conn.query(sql, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }
        // });

        // let sql = `SELECT student_id, AVG(mark) AS average_mark FROM marks WHERE YEAR(date) = YEAR(CURDATE()) 
        //             GROUP BY student_id`;
        // conn.query(sql, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }
        // });

        // Obtén los nombres y apellidos de los alumnos y los nombres de las asignaturas 
        // en las que están apuntados.

        // let sql = `SELECT first_name, last_name, title 
        //             FROM students AS s 
        //             JOIN \`groups\` AS g ON (s.group_id = g.group_id) 
        //             JOIN subject_teacher AS st ON (g.group_id = st.group_id) 
        //             JOIN subjects AS sb ON (st.subject_id = sb.subject_id)`;
        // conn.query(sql, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }
        // });

        // let sql = `SELECT first_name, last_name, title FROM teachers AS t 
        //             JOIN subject_teacher AS st ON (t.teacher_id = st.teacher_id)
        //             JOIN subjects AS s ON(st.subject_id = s.subject_id)`;
        // conn.query(sql, function (err, result) {
        //     if (err)
        //         console.log(err);
        //     else {
        //         console.log("Datos obtendos");
        //         console.log(result);
        //     }
        // });

        // let sql = `SELECT sb.title AS subject_title, t.first_name AS teacher_first_name,
        //             t.last_name AS teacher_last_name,
        //             COUNT(*) AS num_students
        //             FROM students AS s
        //             JOIN \`groups\` AS g ON (s.group_id = g.group_id)
        //             JOIN subject_teacher AS st ON (g.group_id = st.group_id)
        //             JOIN subjects AS sb ON (st.subject_id = sb.subject_id)
        //             JOIN teachers AS t ON (st.teacher_id = t.teacher_id)
        //             GROUP BY sb.title, st.teacher_id`;
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
