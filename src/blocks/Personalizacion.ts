import { Block } from "payload/types";

export const PersonalizacionFeature: Block = {
    slug: 'personalizcion-block-landing',
    fields: [
       {
        type: 'row',
        fields: [
            {
                type: 'text',
                name: 'CaracteristicaNombre',
                required:true
           },
           {
                type: 'textarea',
                name: 'CaracteristicaDescripcion',
                required: true
           }
        ]
       },
       {
        type: 'row',
        fields: [
            {
                type: 'text',
                name: 'CaracteristicaNombre2',
                required:true
           },
           {
                type: 'textarea',
                name: 'CaracteristicaDescripcion2',
                required: true
           }
        ]
       },
       {
        type: 'row',
        fields: [
            {
                type: 'text',
                name: 'CaracteristicaNombre3',
           },
           {
                type: 'textarea',
                name: 'CaracteristicaDescripcion3',
           }
        ]
       },
       {
        type: 'row',
        fields: [
            {
                type: 'text',
                name: 'CaracteristicaNombre4',
           },
           {
                type: 'textarea',
                name: 'CaracteristicaDescripcion4',
           }
        ]
       },
       {
            type: 'text',
            name: 'SplineURLAnimationLink',
            required:true
       }
    ]
}