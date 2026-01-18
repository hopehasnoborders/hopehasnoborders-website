export default {
    name: 'banner',
    title: '🚨 Emergency Banner',
    type: 'document',
    fields: [
        { name: 'enabled', title: 'Show Banner?', type: 'boolean', initialValue: false },
        {
            name: 'backgroundColor',
            title: 'Background Color',
            type: 'string',
            options: {
                list: [
                    { title: 'Brand Yellow', value: '#FFB81C' },
                    { title: 'Emergency Red', value: '#EF4444' },
                    { title: 'Info Blue', value: '#3B82F6' },
                ],
                layout: 'radio'
            }
        },
        { name: 'message_en', title: 'Message (En)', type: 'string' },
        { name: 'message_es', title: 'Message (Es)', type: 'string' },
        { name: 'btn_en', title: 'Button Label (En)', type: 'string' },
        { name: 'btn_es', title: 'Button Label (Es)', type: 'string' },
        { name: 'link', title: 'Link Destination', type: 'string' },
    ]
}
