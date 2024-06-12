let handler = async (m, { conn, args, usedPrefix, command }) => {
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
            header: {
              title: 'YORICHI BOT'
            },
            body: {
              text:'قم بإختيار اللعبه التي تريدها *من خلال الضغط على الزر الأول*'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'اضغط هنا',
                    sections: [
                      {
                        title: 'العاب البوت ',
                        highlight_label: 'اختر اللعبه',
                        rows: [
                          
                         {
                            header: 'للعبة هل',
                            title: '.هل',
                            description: '',
                            id: '.هل'
                          },
                          {
                            header: 'للعبة الطلاق',
                            title: '.طلاق',
                            description: '',
                            id: '.طلاق'
                          },
                          {
                            header: 'للعبة الزواج',
                            title: '.زواج',
                            description: '',
                            id: '.زواج'
                          },
                          {
                            header: 'للعبة اكس او',
                            title: '.اكس',
                            description: '',
                            id: '.اكس'
                          },
                          {
                            header: 'للعبة التوب',
                            title: '.توب',
                            description: '',
                            id: '.توب'
                          },
                          {
                            header: 'للعبة الأشباح',
                            title: '.الاشباح',
                            description: '',
                            id: '.الاشباح'
                          },
                          {
                            header: 'للعبة فزوره',
                            title: '.فزوره',
                            description: '',
                            id: '.فزوره'
                          },
                          {
                            header: 'للعبة الفعاليه',
                            title: '.فعاليه',
                            description: '',
                            id: '.فعاليه'
                          },
                          {
                            header: 'للعبة المارد',
                            title: '.مارد',
                            description: '',
                            id: '.مارد'
                          },
                          {
                            header: 'للعبة فكك',
                            title: '.فكك',
                            description: '',
                            id: '.فكك'
                          },
                          {
                            header: 'للعبة الإيموجي',
                            title: '.ايموجي',
                            description: '',
                            id: '.ايموجي'
                          },
                          {
                            header: 'للعبة المنشن',
                            title: '.تاج',
                            description: '',
                            id: '.تاج'
                          },
                          {
                            header: 'للعبة علم',
                            title: '.علم',
                            description: '',
                            id: '.علم'
                          },
                          {
                            header: 'للعبة عين',
                            title: '.عين',
                            description: '',
                            id: '.عين'
                          },
                          {
                            header: 'للعبة احزر',
                            title: '.احزر',
                            description: '',
                            id: '.احزر'
                          },
                          {
                            header: 'للعبة تحدي',
                            title: '.تحدي',
                            description: '',
                            id: '.تحدي'
                          },
                          {
                            header: 'لأسئلة الأنمي',
                            title: '.سوال',
                            description: '',
                            id: '.سوال'
                          },
                          {
                            header: 'للأسئلة الشخصيه',
                            title: '.سؤال',
                            description: '',
                            id: '.سؤال'
                          },
                          {
                            header: 'لأسئلة الدين',
                            title: '.دين',
                            description: '',
                            id: '.دين'
                          },
                         {
                            header: 'للعبة كت',
                            title: '.كت',
                            description: '',
                            id: '.كت'
                         },
                        {
                            header: 'للعبة شاذ',
                            title: '.شاذ',
                            description: '',
                            id: '.شاذ'
                          },
                          {
                            header: 'للعبة النرد',
                            title: '.نرد',
                            description: '',
                            id: '.نرد'
                          },
                         {
                            header: 'للعبة لو خيروك',
                            title: '.لو',
                            description: '',
                            id: '.لو'
                          },
                         {
                            header: 'للعبة الصراحه',
                            title: '.صراحه',
                            description: '',
                            id: '.صراحه'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''

                },
{
              name: "quick_reply",
              buttonParamsJson: '{"display_text":".المهام","id":"message"}'
            },
     {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"قناتي🫶♥","url":"https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01","merchant_url":"https://whatsapp.com/channel/0029VaZQ0FG4dTnQxihmuk01"}'
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
handler.command = ['قسم_الالعاب']

export default handler
