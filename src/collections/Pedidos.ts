import { CollectionConfig } from "payload/types";

export const Pedidos:CollectionConfig = {
    slug: 'pedidos',
    access: {
        read: ()=> true,
        delete: ()=> true,
        update: ()=> true,
        create: ()=> true
    },
    fields: [
        {
            type: 'text',
            name: 'Artista',
            required: true,
            admin: {
                readOnly: true
            }
        },
        {
            type: 'text',
            name: 'Album',
            required: true,
            admin: {
                readOnly: true
            }
        },
        {
            type: 'text',
            name: 'Estado',
            required: true,
            admin: {
                readOnly: true
            }
        },
        {
            type: 'text',
            name: 'Costo',
            required: true,
            admin: {
                readOnly: true
            }
        },
        {
            type: 'text',
            name: 'Imagen',
            required: true,
            admin: {
                readOnly: true
            }
        },
        {
            type: 'relationship',
            relationTo: 'users-app',
            name: 'Usuario',
            required: true,
            admin: {
                readOnly: true
            }
        }
    ]
}