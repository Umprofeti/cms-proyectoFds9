import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/usersAccess";

export const CategoryMusic:CollectionConfig = {
    slug:'category',
    access: {
        read: () => true,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin
    },
    fields: [
        {
            type: 'text',
            required: true,
            name: 'NombreDelGenero'
        }
    ]
}