const _0xd7c159=_0x256d;function _0x5339(){const _0x55c041=['18978xzkQjn','getQuotedMessage','sendFile','video','libwebp','remoteJid','body','promises','viewOnceMessage','path','596680AeQPQG','3857380mxKMQQ','quotedMessage','decodeJid','.bin','stanzaId','includes','3250419UNCbJU','caption','quoted','@g.us','trim','conversation','writeFile','\x0aFN:','send','server','ext','join','mimetype','templateButtonReplyMessage','participant','BEGIN:VCARD\x0aVERSION:3.0\x0aFN:','author','-fs\x201M','audio','ephemeral','type','buttonsResponseMessage','writeFileSync','mentions','then','selectedButtonId','Result\x20is\x20not\x20a\x20buffer','file-type','keys','mtype','sender','2576vuwUWy','ignore','buttonsMessage','sendContact','map','node-fetch','mentionedJid','4zhvhbl','status','isGroup','view_once','description','message','getFile','\x0aitem1.X-ABLabel:Phone\x20number\x0aitem4.ADR:;;India;;;;\x0aitem4.X-ABLabel:Region\x0aEND:VCARD','mime','document','download','1458349XhoGUb','error','endsWith','image','readFileSync','delete','Message','from','sticker','templateMessage','key','../config','-vcodec','test','contextInfo','reply','json','hydratedContentText','isBuffer','../','selectedId','viewOnce','-vf','loadMessage','log','@s.whatsapp.net','fromBuffer','ephemeralMessage','withTag','sendMessage','sendFromUrl','data','10aYUCeH','readViewOnce','scale=512:512:flags=lanczos:force_original_aspect_ratio=decrease,format=rgba,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=#00000000,setsar=1','relayMessage','24559200TCFJGw','asDocument','user','string','text','sendImageAsSticker','concat','logger','packname','split','number','hydratedFourRowTemplate','alloc','getName','\x0aitem1.TEL;waid=','./sticker','2607732MPzYrZ','\x20Contact','normal','sendVideoAsSticker','audio/mpeg','client','application/octet-stream','length','isSelf','exports','matchAll','util','toString'];_0x5339=function(){return _0x55c041;};return _0x5339();}(function(_0x4ecf15,_0x4521a1){const _0x2d6414=_0x256d,_0x1c082c=_0x4ecf15();while(!![]){try{const _0x11c6df=parseInt(_0x2d6414(0xfc))/0x1+parseInt(_0x2d6414(0x130))/0x2+-parseInt(_0x2d6414(0xcb))/0x3+parseInt(_0x2d6414(0xf1))/0x4*(parseInt(_0x2d6414(0xc5))/0x5)+parseInt(_0x2d6414(0x13d))/0x6*(parseInt(_0x2d6414(0xea))/0x7)+-parseInt(_0x2d6414(0xc4))/0x8+-parseInt(_0x2d6414(0x120))/0x9*(parseInt(_0x2d6414(0x11c))/0xa);if(_0x11c6df===_0x4521a1)break;else _0x1c082c['push'](_0x1c082c['shift']());}catch(_0x51db05){_0x1c082c['push'](_0x1c082c['shift']());}}}(_0x5339,0xc5f41));const {jidDecode,downloadContentFromMessage,getContentType,generateForwardMessageContent,generateLinkPreviewIfRequired,generateWAMessageFromContent}=require('@whiskeysockets/baileys'),fs=require('fs');cmd={0x1:[_0xd7c159(0xdc),'-vcodec',_0xd7c159(0x141),_0xd7c159(0x112),_0xd7c159(0x11e)],0x2:[_0xd7c159(0xdc),_0xd7c159(0x108),_0xd7c159(0x141)]};function _0x256d(_0x29a0b2,_0x500571){const _0x5339da=_0x5339();return _0x256d=function(_0x256d38,_0x5b0035){_0x256d38=_0x256d38-0xc3;let _0xa648d6=_0x5339da[_0x256d38];return _0xa648d6;},_0x256d(_0x29a0b2,_0x500571);}const fetch=require(_0xd7c159(0xef)),{fromBuffer}=require(_0xd7c159(0xe6));let path=require(_0xd7c159(0xc3));const {writeExifImg,writeExifVid,imageToWebp,videoToWebp}=require(_0xd7c159(0x12f)),config=require(_0xd7c159(0x107)),downloadMedia=(_0x4390b2,_0x340038)=>new Promise(async(_0x51b36c,_0x34c37c)=>{const _0x423dd2=_0xd7c159;let _0x38f2e5=Object['keys'](_0x4390b2)[0x0],_0x12a4c5={'imageMessage':_0x423dd2(0xff),'videoMessage':'video','stickerMessage':_0x423dd2(0x104),'documentMessage':_0x423dd2(0xfa),'audioMessage':'audio'},_0x2110da=_0x4390b2;_0x38f2e5==_0x423dd2(0x105)&&(_0x2110da=_0x4390b2[_0x423dd2(0x105)][_0x423dd2(0x12b)],_0x38f2e5=Object[_0x423dd2(0xe7)](_0x2110da)[0x0]);_0x38f2e5==_0x423dd2(0xec)&&(_0x2110da=_0x4390b2[_0x423dd2(0xec)],_0x38f2e5=Object[_0x423dd2(0xe7)](_0x2110da)[0x0]);try{if(_0x340038){const _0x4145da=await downloadContentFromMessage(_0x2110da[_0x38f2e5],_0x12a4c5[_0x38f2e5]);let _0x5a5d58=Buffer['from']([]);for await(const _0x4d9490 of _0x4145da){_0x5a5d58=Buffer[_0x423dd2(0x126)]([_0x5a5d58,_0x4d9490]);}await fs[_0x423dd2(0x144)][_0x423dd2(0xd1)](_0x340038,_0x5a5d58),_0x51b36c(_0x340038);}else{const _0x7697b8=await downloadContentFromMessage(_0x2110da[_0x38f2e5],_0x12a4c5[_0x38f2e5]);let _0x428bcb=Buffer[_0x423dd2(0x103)]([]);for await(const _0xd041fc of _0x7697b8){_0x428bcb=Buffer[_0x423dd2(0x126)]([_0x428bcb,_0xd041fc]);}_0x51b36c(_0x428bcb);}}catch(_0xda9a19){_0x34c37c(_0xda9a19);}});async function serialize(_0x43bab9,_0x39423c){const _0x5edd3d=_0xd7c159;_0x43bab9[_0x5edd3d(0xc7)]=_0x3357ab=>{const _0x4e08bd=_0x5edd3d;if(/:\d+@/gi['test'](_0x3357ab)){const _0x1849cd=jidDecode(_0x3357ab)||{};return(_0x1849cd['user']&&_0x1849cd['server']&&_0x1849cd[_0x4e08bd(0x122)]+'@'+_0x1849cd[_0x4e08bd(0xd4)]||_0x3357ab)[_0x4e08bd(0xcf)]();}else return _0x3357ab;},_0x39423c['copyNForward']=async(_0x5d5abf,_0x2570ed,_0x57a128=![],_0x42229c={})=>{const _0x267c90=_0x5edd3d;let _0x57727c;_0x42229c[_0x267c90(0x11d)]&&(_0x2570ed['message']=_0x2570ed['message']&&_0x2570ed[_0x267c90(0xf6)][_0x267c90(0x117)]&&_0x2570ed[_0x267c90(0xf6)][_0x267c90(0x117)][_0x267c90(0xf6)]?_0x2570ed[_0x267c90(0xf6)][_0x267c90(0x117)]['message']:_0x2570ed['message']||undefined,_0x57727c=Object[_0x267c90(0xe7)](_0x2570ed[_0x267c90(0xf6)][_0x267c90(0x145)][_0x267c90(0xf6)])[0x0],delete(_0x2570ed[_0x267c90(0xf6)]&&_0x2570ed[_0x267c90(0xf6)][_0x267c90(0xeb)]?_0x2570ed[_0x267c90(0xf6)][_0x267c90(0xeb)]:_0x2570ed[_0x267c90(0xf6)]||undefined),delete _0x2570ed[_0x267c90(0xf6)][_0x267c90(0x145)][_0x267c90(0xf6)][_0x57727c][_0x267c90(0x111)],_0x2570ed['message']={..._0x2570ed['message']['viewOnceMessage'][_0x267c90(0xf6)]});let _0x372d0b=Object['keys'](_0x2570ed['message'])[0x0],_0x524c1f=await generateForwardMessageContent(_0x2570ed,_0x57a128),_0x4ef035=Object[_0x267c90(0xe7)](_0x524c1f)[0x0],_0x25f312={};if(_0x372d0b!=_0x267c90(0xd0))_0x25f312=_0x2570ed[_0x267c90(0xf6)][_0x372d0b][_0x267c90(0x10a)];_0x524c1f[_0x4ef035][_0x267c90(0x10a)]={..._0x25f312,..._0x524c1f[_0x4ef035][_0x267c90(0x10a)]};const _0x28515d=await generateWAMessageFromContent(_0x5d5abf,_0x524c1f,_0x42229c?{..._0x524c1f[_0x4ef035],..._0x42229c,..._0x42229c[_0x267c90(0x10a)]?{'contextInfo':{..._0x524c1f[_0x4ef035]['contextInfo'],..._0x42229c[_0x267c90(0x10a)]}}:{}}:{});return await _0x39423c[_0x267c90(0x11f)](_0x5d5abf,_0x28515d[_0x267c90(0xf6)],{'messageId':_0x28515d[_0x267c90(0x106)]['id']}),_0x28515d;},_0x43bab9[_0x5edd3d(0xed)]=async(_0x4d25a4,_0x51b38a,_0x248d46=![],_0x19df69={})=>{const _0x59bcea=_0x5edd3d;let _0x52ae7a=[];for(let _0x35d433 of _0x51b38a){num=typeof _0x35d433==_0x59bcea(0x12a)?_0x35d433+_0x59bcea(0x115):_0x35d433,num2=typeof _0x35d433=='number'?_0x35d433:_0x35d433[_0x59bcea(0x129)]('@')[0x0],_0x52ae7a['push']({'displayName':await _0x39423c[_0x59bcea(0x12d)](num),'vcard':_0x59bcea(0xda)+await _0x39423c['getName'](num)+_0x59bcea(0xd2)+await _0x39423c[_0x59bcea(0x12d)](num)+_0x59bcea(0x12e)+num2+':'+num2+_0x59bcea(0xf8)});}return _0x39423c[_0x59bcea(0x119)](_0x4d25a4,{'contacts':{'displayName':_0x52ae7a[_0x59bcea(0x137)]+_0x59bcea(0x131),'contacts':_0x52ae7a},..._0x19df69},{'quoted':_0x248d46});},_0x39423c[_0x5edd3d(0x127)]={..._0x39423c[_0x5edd3d(0x127)],'info'(){const _0x4ec1c0=_0x5edd3d;console[_0x4ec1c0(0x114)]();},'error'(){const _0x7bad42=_0x5edd3d;console[_0x7bad42(0x114)]();},'warn'(){const _0xd4d8b0=_0x5edd3d;console[_0xd4d8b0(0x114)]();}};_0x43bab9[_0x5edd3d(0x106)]&&(_0x43bab9['id']=_0x43bab9['key']['id'],_0x43bab9['isSelf']=_0x43bab9[_0x5edd3d(0x106)]['fromMe'],_0x43bab9[_0x5edd3d(0x103)]=_0x43bab9[_0x5edd3d(0x106)][_0x5edd3d(0x142)],_0x43bab9[_0x5edd3d(0xf3)]=_0x43bab9['from'][_0x5edd3d(0xfe)](_0x5edd3d(0xce)),_0x43bab9[_0x5edd3d(0xe9)]=_0x43bab9[_0x5edd3d(0xf3)]?_0x43bab9[_0x5edd3d(0xc7)](_0x43bab9[_0x5edd3d(0x106)][_0x5edd3d(0xd9)]):_0x43bab9[_0x5edd3d(0x138)]?_0x43bab9[_0x5edd3d(0xc7)](_0x39423c[_0x5edd3d(0x122)]['id']):_0x43bab9['from']);if(_0x43bab9['message']){_0x43bab9[_0x5edd3d(0xdf)]=getContentType(_0x43bab9[_0x5edd3d(0xf6)]);if(_0x43bab9[_0x5edd3d(0xdf)]===_0x5edd3d(0x117)){_0x43bab9[_0x5edd3d(0xf6)]=_0x43bab9[_0x5edd3d(0xf6)][_0x43bab9[_0x5edd3d(0xdf)]]['message'];const _0x3015a2=Object['keys'](_0x43bab9[_0x5edd3d(0xf6)])[0x0];_0x43bab9['type']=_0x3015a2,_0x3015a2===_0x5edd3d(0x145)&&(_0x43bab9[_0x5edd3d(0xf6)]=_0x43bab9[_0x5edd3d(0xf6)][_0x43bab9[_0x5edd3d(0xdf)]][_0x5edd3d(0xf6)],_0x43bab9[_0x5edd3d(0xdf)]=getContentType(_0x43bab9[_0x5edd3d(0xf6)]));}_0x43bab9[_0x5edd3d(0xdf)]===_0x5edd3d(0x145)&&(_0x43bab9[_0x5edd3d(0xf6)]=_0x43bab9['message'][_0x43bab9[_0x5edd3d(0xdf)]][_0x5edd3d(0xf6)],_0x43bab9[_0x5edd3d(0xdf)]=getContentType(_0x43bab9[_0x5edd3d(0xf6)]));try{_0x43bab9[_0x5edd3d(0xe2)]=_0x43bab9['message'][_0x43bab9['type']][_0x5edd3d(0x10a)]?_0x43bab9[_0x5edd3d(0xf6)][_0x43bab9[_0x5edd3d(0xdf)]]['contextInfo'][_0x5edd3d(0xf0)]||[]:[];}catch{_0x43bab9['mentions']=![];}try{const _0x1b5e55=_0x43bab9[_0x5edd3d(0xf6)][_0x43bab9['type']][_0x5edd3d(0x10a)];if(_0x1b5e55['quotedMessage'][_0x5edd3d(0x117)]){const _0x25a19b=Object[_0x5edd3d(0xe7)](_0x1b5e55[_0x5edd3d(0xc6)][_0x5edd3d(0x117)][_0x5edd3d(0xf6)])[0x0];_0x25a19b===_0x5edd3d(0x145)?_0x43bab9[_0x5edd3d(0xcd)]={'type':_0x5edd3d(0xf4),'stanzaId':_0x1b5e55[_0x5edd3d(0xc9)],'sender':_0x43bab9[_0x5edd3d(0xc7)](_0x1b5e55[_0x5edd3d(0xd9)]),'message':_0x1b5e55['quotedMessage']['ephemeralMessage']['message'][_0x5edd3d(0x145)]['message']}:_0x43bab9[_0x5edd3d(0xcd)]={'type':_0x5edd3d(0xde),'stanzaId':_0x1b5e55[_0x5edd3d(0xc9)],'sender':_0x43bab9['decodeJid'](_0x1b5e55[_0x5edd3d(0xd9)]),'message':_0x1b5e55[_0x5edd3d(0xc6)]['ephemeralMessage'][_0x5edd3d(0xf6)]};}else _0x1b5e55['quotedMessage']['viewOnceMessage']?_0x43bab9[_0x5edd3d(0xcd)]={'type':_0x5edd3d(0xf4),'stanzaId':_0x1b5e55[_0x5edd3d(0xc9)],'sender':_0x43bab9[_0x5edd3d(0xc7)](_0x1b5e55[_0x5edd3d(0xd9)]),'message':_0x1b5e55['quotedMessage'][_0x5edd3d(0x145)][_0x5edd3d(0xf6)]}:_0x43bab9[_0x5edd3d(0xcd)]={'type':_0x5edd3d(0x132),'stanzaId':_0x1b5e55[_0x5edd3d(0xc9)],'sender':_0x43bab9[_0x5edd3d(0xc7)](_0x1b5e55[_0x5edd3d(0xd9)]),'message':_0x1b5e55[_0x5edd3d(0xc6)]};_0x43bab9[_0x5edd3d(0xcd)]['isSelf']=_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0xe9)]===_0x43bab9[_0x5edd3d(0xc7)](_0x39423c[_0x5edd3d(0x122)]['id']),_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0xe8)]=Object['keys'](_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0xf6)])['filter'](_0x21c0a2=>_0x21c0a2[_0x5edd3d(0xca)](_0x5edd3d(0x102))||_0x21c0a2[_0x5edd3d(0xca)](_0x5edd3d(0xd0)))[0x0],_0x43bab9[_0x5edd3d(0xcd)]['text']=_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0xf6)][_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0xe8)]][_0x5edd3d(0x124)]||_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0xf6)][_0x43bab9['quoted'][_0x5edd3d(0xe8)]][_0x5edd3d(0xf5)]||_0x43bab9['quoted'][_0x5edd3d(0xf6)][_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0xe8)]]['caption']||_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0xe8)]==_0x5edd3d(0xd8)&&_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0xf6)][_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0xe8)]]['hydratedTemplate'][_0x5edd3d(0x10d)]||_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0xf6)][_0x43bab9[_0x5edd3d(0xcd)]['mtype']]||'',_0x43bab9[_0x5edd3d(0xcd)]['key']={'id':_0x43bab9[_0x5edd3d(0xcd)]['stanzaId'],'fromMe':_0x43bab9['quoted'][_0x5edd3d(0x138)],'remoteJid':_0x43bab9[_0x5edd3d(0x103)]},_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0x101)]=()=>_0x39423c[_0x5edd3d(0x119)](_0x43bab9[_0x5edd3d(0x103)],{'delete':_0x43bab9[_0x5edd3d(0xcd)]['key']}),_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0xfb)]=_0x1c818e=>downloadMedia(_0x43bab9[_0x5edd3d(0xcd)][_0x5edd3d(0xf6)],_0x1c818e);}catch(_0x282788){_0x43bab9['quoted']=null;}try{_0x43bab9[_0x5edd3d(0x143)]=_0x43bab9[_0x5edd3d(0xf6)][_0x5edd3d(0xd0)]||_0x43bab9['message'][_0x43bab9[_0x5edd3d(0xdf)]]['text']||_0x43bab9[_0x5edd3d(0xf6)][_0x43bab9['type']][_0x5edd3d(0xcc)]||_0x43bab9['type']==='listResponseMessage'&&_0x43bab9[_0x5edd3d(0xf6)][_0x43bab9[_0x5edd3d(0xdf)]]['singleSelectReply']['selectedRowId']||_0x43bab9['type']===_0x5edd3d(0xe0)&&_0x43bab9[_0x5edd3d(0xf6)][_0x43bab9[_0x5edd3d(0xdf)]]['selectedButtonId']&&_0x43bab9[_0x5edd3d(0xf6)][_0x43bab9[_0x5edd3d(0xdf)]][_0x5edd3d(0xe4)]||_0x43bab9[_0x5edd3d(0xdf)]==='templateButtonReplyMessage'&&_0x43bab9['message'][_0x43bab9['type']][_0x5edd3d(0x110)]||![];}catch{_0x43bab9[_0x5edd3d(0x143)]=![];}_0x43bab9['getQuotedObj']=_0x43bab9[_0x5edd3d(0x13e)]=async()=>{const _0x8e054b=_0x5edd3d;if(!_0x43bab9[_0x8e054b(0xcd)][_0x8e054b(0xc9)])return![];let _0x1c1c9a=await store[_0x8e054b(0x113)](_0x43bab9[_0x8e054b(0x103)],_0x43bab9[_0x8e054b(0xcd)][_0x8e054b(0xc9)],_0x39423c);return serialize(_0x1c1c9a,_0x39423c);},_0x39423c['getFile']=async(_0x42c370,_0xcf6a19)=>{const _0x54aaf9=_0x5edd3d;let _0x3c0f40,_0x5f0a19,_0x25f25a=Buffer[_0x54aaf9(0x10e)](_0x42c370)?_0x42c370:/^data:.*?\/.*?;base64,/i[_0x54aaf9(0x109)](_0x42c370)?Buffer[_0x54aaf9(0x103)](_0x42c370['split']`,`[0x1],'base64'):/^https?:\/\//['test'](_0x42c370)?await(_0x3c0f40=await fetch(_0x42c370))['buffer']():fs['existsSync'](_0x42c370)?(_0x5f0a19=_0x42c370,fs[_0x54aaf9(0x100)](_0x42c370)):typeof _0x42c370===_0x54aaf9(0x123)?_0x42c370:Buffer[_0x54aaf9(0x12c)](0x0);if(!Buffer[_0x54aaf9(0x10e)](_0x25f25a))throw new TypeError(_0x54aaf9(0xe5));let _0x1abb40=await fromBuffer(_0x25f25a)||{'mime':_0x54aaf9(0x136),'ext':_0x54aaf9(0xc8)};if(_0x25f25a&&_0xcf6a19&&!_0x5f0a19)_0x5f0a19=path[_0x54aaf9(0xd6)](__dirname,_0x54aaf9(0x10f)+new Date()*0x1+'.'+_0x1abb40[_0x54aaf9(0xd5)]),await fs[_0x54aaf9(0x144)][_0x54aaf9(0xd1)](_0x5f0a19,_0x25f25a);return{'res':_0x3c0f40,'filename':_0x5f0a19,..._0x1abb40,'data':_0x25f25a};},_0x39423c[_0x5edd3d(0x125)]=async(_0x261407,_0x2da525,_0x125f63={})=>{const _0x3855e5=_0x5edd3d;let _0x24cb7c;_0x125f63&&(_0x125f63[_0x3855e5(0x128)]||_0x125f63['author'])?_0x24cb7c=await writeExifImg(_0x2da525,_0x125f63):_0x24cb7c=await imageToWebp(_0x2da525),await _0x39423c[_0x3855e5(0x119)](_0x261407,{'sticker':{'url':_0x24cb7c},..._0x125f63},_0x125f63);},_0x39423c[_0x5edd3d(0x133)]=async(_0x4791da,_0x3f61f5,_0x4a59cf={})=>{const _0xd46983=_0x5edd3d;let _0x316fdd;_0x4a59cf&&(_0x4a59cf['packname']||_0x4a59cf[_0xd46983(0xdb)])?_0x316fdd=await writeExifVid(_0x3f61f5,_0x4a59cf):_0x316fdd=await videoToWebp(_0x3f61f5),await _0x39423c[_0xd46983(0x119)](_0x4791da,{'sticker':{'url':_0x316fdd},..._0x4a59cf},_0x4a59cf);},_0x39423c[_0x5edd3d(0x10b)]=async(_0x321800,_0x46cf68='')=>{const _0x39418f=_0x5edd3d;_0x39423c['sendMessage'](_0x43bab9['from'],{'text':require('util')['format'](_0x321800),'mentions':_0x46cf68[_0x39418f(0x118)]?[..._0x321800[_0x39418f(0x13a)](/@([0-9]{5,16}|0)/g)]['map'](_0x2bb3c6=>_0x2bb3c6[0x1]+_0x39418f(0x115)):[],..._0x46cf68},{..._0x46cf68,'quoted':_0x43bab9});},_0x43bab9[_0x5edd3d(0x11a)]=async(_0x1edcfa,_0x56b9a4='',_0x288406='',_0x1ccb23,_0x56f49e=![],_0x4e0b9a={})=>{const _0x369379=_0x5edd3d;let _0x564c2d=await _0x39423c[_0x369379(0xf7)](_0x1edcfa,!![]),{res:_0x11733c,data:_0x1d565f,filename:_0x188f35}=_0x564c2d;if(_0x11733c&&_0x11733c[_0x369379(0xf2)]!==0xc8||_0x1d565f['length']<=0x10000)try{throw{'json':JSON['parse'](_0x1d565f[_0x369379(0x13c)]())};}catch(_0x31153b){if(_0x31153b[_0x369379(0x10c)])throw _0x31153b[_0x369379(0x10c)];}let _0x184b5f={'filename':_0x56b9a4};if(_0x1ccb23)_0x184b5f[_0x369379(0xcd)]=_0x1ccb23;if(!_0x564c2d){if(_0x4e0b9a[_0x369379(0x121)])_0x4e0b9a[_0x369379(0x121)]=!![];}let _0x183fab='',_0x3280c5=_0x564c2d[_0x369379(0xf9)],_0x3f7032=_0x23521b=>'./tmp/'+Date['now']()+'.'+_0x23521b;if(/webp/['test'](_0x564c2d[_0x369379(0xf9)]))_0x183fab=_0x369379(0x104);else{if(/image/['test'](_0x564c2d[_0x369379(0xf9)]))_0x183fab=_0x369379(0xff);else{if(/video/[_0x369379(0x109)](_0x564c2d['mime']))_0x183fab=_0x369379(0x140);else{if(/audio/[_0x369379(0x109)](_0x564c2d[_0x369379(0xf9)]))ss=await(_0x56f49e?toPTT:toAudio2)(_0x1d565f,_0x564c2d[_0x369379(0xd5)]),skk=await require(_0x369379(0xe6))[_0x369379(0x116)](ss[_0x369379(0x11b)]),ty=_0x3f7032(skk[_0x369379(0xd5)]),require('fs')[_0x369379(0xe1)](ty,ss[_0x369379(0x11b)]),_0x188f35=ty,_0x183fab=_0x369379(0xdd),_0x3280c5=_0x369379(0x134);else _0x183fab=_0x369379(0xfa);}}}_0x39423c[_0x369379(0x119)](_0x43bab9[_0x369379(0x103)],{..._0x4e0b9a,'caption':_0x288406,'ptt':_0x56f49e,'fileName':_0x56b9a4,[_0x183fab]:{'url':_0x188f35},'mimetype':_0x3280c5},{..._0x184b5f,..._0x4e0b9a})[_0x369379(0xe3)](()=>{fs['unlinkSync'](_0x188f35);});},_0x39423c[_0x5edd3d(0x13f)]=async(_0xc4f8af,_0x19f88a,_0x20b2f1={})=>{const _0x366442=_0x5edd3d;let _0x5e8065=await _0x39423c[_0x366442(0xf7)](_0x19f88a,!![]),{res:_0x294cc9,data:_0xd34bd6,filename:_0x574ce4,mime:_0x1ffe23}=_0x5e8065,_0x14c37a=_0x1ffe23['split']('/')[0x0];console[_0x366442(0x114)](_0x1ffe23);let _0x98412e={..._0x20b2f1,[_0x14c37a]:{'url':_0x574ce4},'mimetype':_0x20b2f1[_0x366442(0xd7)]||_0x1ffe23},_0x4c419b;try{_0x4c419b=await _0x39423c[_0x366442(0x119)](_0xc4f8af,_0x98412e,{..._0x20b2f1});}catch(_0x591680){console[_0x366442(0xfd)](_0x591680),_0x4c419b=null;}finally{if(!_0x4c419b)_0x4c419b=await _0x39423c[_0x366442(0x119)](_0xc4f8af,{..._0x98412e,[_0x14c37a]:_0xd34bd6},{..._0x20b2f1});return _0xd34bd6=null,_0x4c419b;}},_0x39423c[_0x5edd3d(0x10b)]=async(_0x4659d3,_0x2b4baa='')=>{const _0xcb6885=_0x5edd3d;_0x39423c[_0xcb6885(0x119)](_0x43bab9[_0xcb6885(0x103)],{'text':require(_0xcb6885(0x13b))['format'](_0x4659d3),'mentions':_0x2b4baa[_0xcb6885(0x118)]?[..._0x4659d3['matchAll'](/@([0-9]{5,16}|0)/g)][_0xcb6885(0xee)](_0x203048=>_0x203048[0x1]+_0xcb6885(0x115)):[],..._0x2b4baa},{..._0x2b4baa,'quoted':_0x43bab9});},_0x43bab9[_0x5edd3d(0xd3)]=async(_0x43af90,_0x2f697e)=>{const _0x23ab2e=_0x5edd3d;_0x39423c[_0x23ab2e(0x119)](_0x43bab9[_0x23ab2e(0x103)],{'text':require(_0x23ab2e(0x13b))['format'](_0x43af90),..._0x2f697e},{..._0x2f697e});},_0x43bab9[_0x5edd3d(0xfb)]=_0x344b1e=>downloadMedia(_0x43bab9[_0x5edd3d(0xf6)],_0x344b1e),_0x39423c[_0x5edd3d(0x135)]=_0x43bab9;}return _0x43bab9;}module[_0xd7c159(0x139)]={'serialize':serialize,'downloadMedia':downloadMedia};