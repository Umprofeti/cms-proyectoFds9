import { isAdmin, isUserAppOrAdmin, isUserApp } from "../access/usersAccess";
import { CollectionConfig } from "payload/types";


export const UsersApp: CollectionConfig = {
    slug: 'users-app',
    auth: true,
    access: {
        read: () => true,
        create: () => true,
        delete: isAdmin,
        update: isUserAppOrAdmin
    },
    admin: {
        useAsTitle: 'UserName',
    },
    fields: [
        {
            type: 'upload',
            name: 'UserImage',
            relationTo: 'media',
        },
        {
            type: 'text',
            name: 'Nombre',
        },
        {
            type: 'text',
            name: 'Apellido',
        },
        {
            type: 'number',
            name: 'Edad',
        },
        {
            type: 'text',
            name: 'Telfono'
        },
        {
            type: 'text',
            name: 'UserName',
        },
        {
            type: 'text',
            name: 'Pais',
        },
        {
            type: 'row',
            fields: [
                {
                    type: 'text',
                    name: 'TitularDeTarjeta',
                },
                {
                    type: 'text',
                    name: 'TarjetaNumero',
                },
                {
                    type: 'text',
                    name: 'FechaExpiracion',
                },
                {
                    type: 'text',
                    name: 'CCV'
                }
            ]
        }
    ]
}