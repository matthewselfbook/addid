var scripts = document.getElementsByTagName('script'); 


for(var i=0; i<scripts.length; i++){if(scripts[i].src.includes('https://sdk.selfbook.com')){scripts[i].setAttribute('id', 'selfbook_jssdk'); console.log('test')}};


