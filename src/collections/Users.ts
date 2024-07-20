import { isAdmin } from '../access/usersAccess'
import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
  access: {
    read: isAdmin,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin
  },
  auth: {
    tokenExpiration: 3600,
    
  },
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    
  ],
}

export default Users
