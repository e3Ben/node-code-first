import { getDb } from '../dbConnections'
import { UserEntity } from '../generated/models'


const getConn = async () => {
    const conn = await getDb()

    // https://knexjs.org/guide/#pool - '...explicitly teardown the connection pool.'
    const destroy = () => conn.destroy()
    const entity = conn<UserEntity>('User')

    return {entity, destroy}
}

const getAllUsers = async () => {
    const {entity, destroy} = await getConn()
    const users: UserEntity[] = await entity.select('Id', 'Email', 'Password')
    await destroy()
    return users
}

const insertUser = async (email: string, password: string) => {
    const {entity, destroy} = await getConn()
    await entity.insert({
        Email: email,
        Password: password,
    })
    await destroy()
}

export {
    getAllUsers,
    insertUser,
}
