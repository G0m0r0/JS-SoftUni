function encodeAndDecodeMessages() {
    let buttonEncode=document.getElementsByTagName('button')[0];
    let buttonDecode=document.getElementsByTagName('button')[1];

    let textAreaEncode=document.getElementsByTagName('textarea')[0];
    let textAreaDecode=document.getElementsByTagName('textarea')[1];

    buttonEncode.addEventListener('click',(e)=>{
        let decodedTextArea='';
        for (let i = 0; i < textAreaEncode.value.length; i++) {
            decodedTextArea+=String.fromCharCode(textAreaEncode.value.charCodeAt(i)+1);
        }
        textAreaDecode.value=decodedTextArea;
        textAreaEncode.value='';
    });

    buttonDecode.addEventListener('click',()=>{
        let encodeTextArea='';
        for (let i = 0; i < textAreaDecode.value.length; i++) {
            encodeTextArea+=String.fromCharCode(textAreaDecode.value.charCodeAt(i)-1);            
        }
        textAreaDecode.value=encodeTextArea;
    })
}