import { Block } from "payload/types";


export const Carrusel: Block = {
    slug: 'carrusel-landing',
    fields: [
        {
            type: 'relationship',
            relationTo: 'category',
            required: true,
            name: 'ItemsCarrusel'
        }
    ]
}