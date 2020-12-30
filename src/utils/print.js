function handleWindowPrint(ele, fileName){

  var oIframe = document.createElement('iframe');
  var oScript = document.createElement('script');

  document.body.appendChild(oIframe);

  var titleText = document.head.getElementsByTagName('title')[0].innerText;
  document.head.getElementsByTagName('title')[0].innerText = `${fileName}`;
//<link rel="stylesheet"  type="text/css" href="./contract.css"/>
  oIframe.contentDocument.head.innerHTML = `<meta charset="utf-8">
                                            <title>${fileName}</title>
                                            <meta name="format-detection" content="telephone=no">
                                            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
                                            <meta name="viewport" content="width=device-width,initial-scale=1.0">
                                            
                                            <style>
                                              #demo{
                                                width: max-content;
                                                height: max-content;
                                                position: absolute;
                                                top: 0;
                                                left: 0;
                                                right: 0;
                                                bottom: 0;
                                                margin: auto;
                                              }
                                              #demo .title {
                                                display: flex;
                                                align-items: center;
                                                justify-content: space-around;
                                                height: 50px;
                                                font-size: 22px;
                                                margin-bottom: 20px;
                                              }
                                              #demo .title span{
                                                display: block;
                                                font-size: 22px;
                                                margin-left: 320px;
                                              }
                                              #demo .title img {
                                                display: block;
                                                float: right;
                                              }
                                              table{ border-collapse:collapse;}
                                              table td{ border:2px solid #000000; width:100px; height:35px; text-align:center}
                                            </style>`;

  // oIframe.contentWindow.document.body.innerHTML = document.querySelector(ele).outerHTML;
  oIframe.contentDocument.body.innerHTML = document.querySelector(ele).outerHTML;
  oScript.innerHTML = 'window.print();';
  oIframe.contentDocument.body.appendChild(oScript);
  document.body.removeChild(oIframe);
  document.head.getElementsByTagName('title')[0].innerText = titleText;
}

export default {
  handleWindowPrint
}