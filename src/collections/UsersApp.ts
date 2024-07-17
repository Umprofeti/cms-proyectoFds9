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
            required: true
        },
        {
            type: 'text',
            name: 'Nombre',
            required: true
        },
        {
            type: 'text',
            name: 'Apellido',
            required: true
        },
        {
            type: 'number',
            name: 'Edad',
            required: true
        },
        {
            type: 'text',
            name: 'Telfono'
        },
        {
            type: 'text',
            name: 'UserName',
            required: true
        },
        {
            type: 'text',
            name: 'Pais',
            required: true
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