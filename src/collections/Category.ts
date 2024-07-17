import { CollectionConfig } from "payload/types";


export const CategoryMusic:CollectionConfig = {
    slug:'category',
    access: {
        read: () => true,
        create: () => true,
        update: () => true,
        delete: () => true
    },
    fields: [
        {
            type: 'text',
            required: true,
            name: 'NombreDelGenero'
        }
    ]
}