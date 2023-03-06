import {getAllUsers, insertUser} from './repository/userRepository'

const main = async (args: string[]) => {
    await insertUser("janed@nomail.com", 'Password')
    const users = await getAllUsers()
    console.log(users)
}

export {
    main
}
