import { CollectionConfig } from 'payload/types'

const Users: CollectionConfig = {
  slug: 'users',
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
