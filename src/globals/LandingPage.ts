import { Carrusel } from "../blocks/Carrusel";
import { Hero } from "../blocks/Hero";
import { MenuOption } from "../blocks/MenuOption";
import { PersonalizacionFeature } from "../blocks/Personalizacion";
import { GlobalConfig } from "payload/types";
import { isAdmin } from "../access/usersAccess";


export const LandingPage:GlobalConfig = {
    slug: 'landing',
    access: {
        read: () => true,
        update: isAdmin,
    },
    fields: [
        {
            type: 'upload',
            relationTo: 'media',
            required: true,
            name: 'Logo'
        },
        {
            type: 'blocks',
            name: 'MenuOptions',
            blocks: [MenuOption]
        },
        {
            type: 'blocks',
            name: 'Interfaz',
            blocks: [Hero, PersonalizacionFeature, Carrusel]
        }
    ]
}
