let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: 'YORICHI BOT'
            },
            body: {
              text:'لعرض الاقسام قم بالضغط على الزر الأول'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط هنا',
                    sections: [
                      {
                        title: 'أقسام البوت',
                        highlight_label: 'اختار القسم',
                        rows: [
                          {
                            header: 'لإختيار القسم الخاص بالالعاب',
                            title: '.قسم_الالعاب',
                          description: '',
                            id: '.قسم_الالعاب'
                          },
                          {
                            header: 'لإختيار القسم الخاص بالجروب ',
                            title: '.قسم_الجروب',
                            description: '',
                            id: '.قسم_الجروب'
                          },
                          {
                            header: 'لإختيار القسم الخاص بالبنك',
                            title: '.قسم_البنك',
                            description: '',
                            id: '.قسم_الالعاب'
                          },
                          {
                            header: 'لإختيار القسم الخاص بالتحميل',
                            title: '.قسم_التحميل',
                            description: '',
                            id: '.قسم_التحميل'
                          },
                          {
                            header: 'لإختيار القسم الخاص بالدين',
                            title: '.قسم_الدين',
                            description: '',
                            id: '.قسم_الدين'
                          },
                          {
                            header: 'لإختيار القسم الخاص بالمطور',
                            title: '.قسم_المطور',
                            description: '',
                            id: '.قسم_المطور'
                          },
                                                  ]
                      }
                    ]
                  }),
                  messageParamsJson: ''

                },
{
              name: "quick_reply",
              buttonParamsJson: '{"display_text":".التفعيلات","id":"message"}'
            },
     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"قناتي🫶❤️","url":"https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01","merchant_url":"https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01"}'
             },
     { 
                 name: "quick_reply",
              buttonParamsJson: '{"display_text":".معلومات","id":"message"}'
               }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['المهام','الاوامر','اوامر','مهام','الاقسام']

export default handler
