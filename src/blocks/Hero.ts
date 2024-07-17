import { Block } from "payload/types";

export const Hero:Block = {
    slug: 'hero',
    fields: [
        {
            type: 'text',
            name: 'Title',
            required: true,
        },
        {
            type: 'textarea',
            name: 'Descripcion',
            required: true,
        },
        {
            type: 'upload',
            name: 'Imagen',
            relationTo: 'media',
            required: true
        }
    ]
}