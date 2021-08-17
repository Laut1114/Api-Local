import { createPool } from "mysql";
import keys from "./keys";

const pool = createPool(keys.database);

pool.getConnection().then(connection => {
    pool.releaseConnection(connection)
    console.log('Db is connected')
});

export default pool;