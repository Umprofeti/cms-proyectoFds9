import { Block } from "payload/types";

export const MenuOption:Block = {
    slug: 'menuOption',
    fields:[
        {
            type: 'text',
            name: 'Nombre',
            required: true
        },
        {
            type: 'text',
            name: 'NombreDelBloque',
            required: true
        }
    ]
}