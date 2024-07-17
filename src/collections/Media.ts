import { CollectionConfig } from "payload/types";
import { isUserAppOrAdmin } from "../access/usersAccess";

const Media: CollectionConfig = {
    slug:'media',
    access: {
        read: ()=> true,
        update: isUserAppOrAdmin,
        delete: isUserAppOrAdmin,
        create: isUserAppOrAdmin
    },
    upload:{
        staticURL: '/media',
        staticDir: 'media',
        disableLocalStorage: true,
        adminThumbnail: 'thumbnail',
        mimeTypes: ['image/*']
    },
    fields: []

}

export default Media;