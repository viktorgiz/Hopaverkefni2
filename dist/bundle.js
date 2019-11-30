(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var d = document;
  var HtmlButton;
  var CssButton;
  var JsButton;

  var List =
  /*#__PURE__*/
  function () {
    function List(gogn, i) {
      _classCallCheck(this, List);

      this.container = document.querySelector('.list__row');
      this.fetchData();
      this.upploadClasses(gogn);
      this.CreateLecture(gogn, i);
    }

    _createClass(List, [{
      key: "upploadClasses",
      value: function upploadClasses(gogn) {
        if (gogn) {
          HtmlButton = d.getElementsByClassName('Html');
          CssButton = d.getElementsByClassName('Css');
          JsButton = d.getElementsByClassName('JavaScript');
          var booleanHtml = Boolean(HtmlButton[0].className === 'filters__filter Html button__html');
          var booleanCss = Boolean(CssButton[0].className === 'filters__filter Css button__css');
          var booleanJs = Boolean(JsButton[0].className === 'filters__filter JavaScript button__js'); // Enginn er active eða allir active

          var AllActive = Boolean(booleanHtml === booleanCss && booleanCss === booleanJs);

          for (var i = 0; i < gogn.lectures.length; i += 1) {
            if (booleanHtml && gogn.lectures[i].category === 'html' || AllActive) {
              this.CreateLecture(gogn, i);
            } else if (booleanCss && gogn.lectures[i].category === 'css' || AllActive) {
              this.CreateLecture(gogn, i);
            } else if (booleanJs && gogn.lectures[i].category === 'javascript' || AllActive) {
              this.CreateLecture(gogn, i);
            } // Mikilvægt, hér er búið til lykil fyrir hvern fyrirlestur í localstorage,
            // í honum er fylki sem inniheldur alla fyrirlestranna


            var ItemKey = gogn.lectures[i].slug;
            var Fyrirlestur = JSON.stringify(gogn.lectures[i]);
            localStorage.setItem(ItemKey, Fyrirlestur);
          }
        }
      }
    }, {
      key: "CreateLecture",
      value: function CreateLecture(gogn, i) {
        if (gogn) {
          // ===== ATH ATH ATH =========
          // > data["lectures"]
          //  v (13) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}
          //  > 0 : {slug: "html-sagan", title: "Sagan", category:
          //  > 1 : {slug: "html-element", title: "Element", cat
          //  ...
          var Lecture = gogn.lectures[i]; // ===========================

          var DivClass = d.createElement('div');
          DivClass.className = 'list__col';
          this.container.appendChild(DivClass);
          var LImage = d.createElement('img');
          var LBot = d.createElement('div');
          var LBotV = d.createElement('div');
          var LBotH = d.createElement('div');
          var LCategory = d.createElement('p');
          var LTitle = d.createElement('h2');
          var LRammi = d.createElement('div');
          LImage.className = 'listItem__image';
          LBot.className = 'listItem__bottom';
          LBotV.className = 'listItem__bottomV';
          LBotH.className = 'listItem__bottomH';
          LCategory.className = 'listItem__category';
          LTitle.className = 'listItem__title';
          LRammi.className = 'listItem';
          LRammi.id = Lecture.slug;

          if (Lecture.thumbnail) {
            LImage.src = Lecture.thumbnail;
          } else {
            LImage = d.createElement('div');
            LImage.className = 'listItem__image no__image';
          }

          LCategory.appendChild(d.createTextNode(Lecture.category));
          LTitle.appendChild(d.createTextNode(Lecture.title));
          LRammi.appendChild(LImage);
          LRammi.appendChild(LBot);
          LBotV.appendChild(LCategory);
          LBotV.appendChild(LTitle);
          LBot.appendChild(LBotV);
          LBot.appendChild(LBotH);
          DivClass.appendChild(LRammi);

          if (JSON.parse(localStorage.getItem('BunirFyrirlestrar')) !== null) {
            var Fyrirlestrar = JSON.parse(localStorage.getItem('BunirFyrirlestrar'));

            for (i in Fyrirlestrar) {
              if (Lecture.slug === i) {
                if (Fyrirlestrar[i] === 'Klarad') {
                  LBotH.appendChild(d.createTextNode('✓'));
                }
              }
            }
          }
        }
      }
    }, {
      key: "fetchData",
      value: function fetchData() {
        var _this = this;

        fetch('lectures.json').then(function (response) {
          if (response.ok) {
            return response.json();
          }

          throw new Error('Villa við að sækja gögn');
        }).then(function (data) {
          // List.upploadClasses(data);
          localStorage.setItem('json-file', JSON.stringify(data));

          _this.upploadClasses(JSON.parse(localStorage.getItem('json-file')));
        });
      }
    }]);

    return List;
  }();
  function empty(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }
  function fyrirlesturBirta(element) {
    var fyrirlestrar = d.getElementsByClassName('listItem');

    for (var i = 0; i < fyrirlestrar.length; i += 1) {
      if (element.target.parentElement.id === fyrirlestrar[i].id || element.target.id === fyrirlestrar[i].id) {
        // setum inn slug á völdum fyrirlestri inní localStorage
        // sem nýjan lykil þ.a. þegar við opnum fyrirlestur.html,
        // þá vitum við hvaða hvaða upplýsingar við eigum að nota
        var fyrirlesturSlug = void 0;

        if (element.target.parentElement.id === fyrirlestrar[i].id) {
          fyrirlesturSlug = element.target.parentElement.id;
        } else if (element.target.id === fyrirlestrar[i].id) {
          fyrirlesturSlug = element.target.id;
        }

        localStorage.setItem('slug', JSON.stringify(fyrirlesturSlug));
        window.location.replace('fyrirlestur.html');
      }
    }
  }

  var HtmlButton$1;
  var CssButton$1;
  var JsButton$1;
  var d$1 = document; // export function toggleHtml() {
  //     HtmlButton.className = 'button__html';
  // }
  // export function toggleCss() {
  //     CssButton.className = 'button__css';
  // }
  // export function toggleJS() {
  //     JsButton.className = 'button__js';
  // }

  function toggle(e) {
    e.preventDefault;
    HtmlButton$1 = d$1.getElementsByClassName('Html')[0];
    CssButton$1 = d$1.getElementsByClassName('Css')[0];
    JsButton$1 = d$1.getElementsByClassName('JavaScript')[0];

    if (e.srcElement.className === HtmlButton$1.className) {
      if (HtmlButton$1.className === 'filters__filter Html') {
        HtmlButton$1.className = 'filters__filter Html button__html';
      } else {
        HtmlButton$1.className = 'filters__filter Html';
      }
    } else if (e.srcElement.className === CssButton$1.className) {
      // CssButton.className = 'filters__filter Css button__css';
      if (CssButton$1.className === 'filters__filter Css') {
        CssButton$1.className = 'filters__filter Css button__css';
      } else {
        CssButton$1.className = 'filters__filter Css';
      }
    } else if (e.srcElement.className === JsButton$1.className) {
      // JsButton.className = 'filters__filter JavaScript button__js';
      if (JsButton$1.className === 'filters__filter JavaScript') {
        JsButton$1.className = 'filters__filter JavaScript button__js';
      } else {
        JsButton$1.className = 'filters__filter JavaScript';
      }
    }
  }

  var Fyrirlestur;
  function SaveContent(jsonSkra) {
    Fyrirlestur = jsonSkra;
  }
  function LoadContent() {
    return Fyrirlestur;
  }
  function FyrirlesturBuinToggle() {
    if (localStorage.getItem('BunirFyrirlestrar') === null) {
      var json = {
        'html-sagan': 'Oklarad',
        'html-element': 'Oklarad',
        'html-a11y': 'Oklarad',
        'css-syntax': 'Oklarad',
        'css-box': 'Oklarad',
        'css-flexbox': 'Oklarad',
        'css-responsive': 'Oklarad',
        'js-basic': 'Oklarad',
        'js-programs': 'Oklarad',
        'js-functions': 'Oklarad',
        'js-array': 'Oklarad',
        'js-dom': 'Oklarad',
        'js-example': 'Oklarad'
      };
      localStorage.setItem('BunirFyrirlestrar', JSON.stringify(json));
    }

    var Fyrirlestrar = JSON.parse(localStorage.getItem('BunirFyrirlestrar'));

    for (var i in Fyrirlestrar) {
      if (Fyrirlestur.slug === i) {
        if (Fyrirlestrar[i] === 'Oklarad') {
          Fyrirlestrar[i] = 'Klarad';
          localStorage.removeItem('BunirFyrirlestrar');
          localStorage.setItem('BunirFyrirlestrar', JSON.stringify(Fyrirlestrar));
        } else if (Fyrirlestrar[i] === 'Klarad') {
          Fyrirlestrar[i] = 'Oklarad';
          localStorage.removeItem('BunirFyrirlestrar');
          localStorage.setItem('BunirFyrirlestrar', JSON.stringify(Fyrirlestrar));
        }
      }
    }
  }

  var d$2 = document; // let jsonFile = JSON.parse(localStorage['json-file']);

  var divRow;
  function youtubeContent(i) {
    var LContent = LoadContent().content;
    var YtContent = d$2.createElement('div');
    var video1 = d$2.createElement('div');
    var video2 = d$2.createElement('iframe');
    divRow = d$2.getElementsByClassName('FyrirlesturWidth')[0];
    YtContent.className = 'Content__youtube Content__padding';
    video1.className = 'Content__video1';
    video2.className = 'Content__video2';
    YtContent.appendChild(video1);
    video1.appendChild(video2);
    divRow.appendChild(YtContent);
    video2.src = LContent[i].data;
    video2.frameborder = '0';
    video2.allowfullscreen = '0';
  }
  function textContent(i) {
    var LContent = LoadContent().content;
    divRow = d$2.getElementsByClassName('FyrirlesturWidth')[0];
    var textContainer = d$2.createElement('div');
    var paragraphs = LContent[i].data.split('\n');

    for (var j = 0; j < paragraphs.length; j += 1) {
      var textp = d$2.createElement('p');
      var textnode = d$2.createTextNode(paragraphs[j]);
      textContainer.className = 'Content__text Content__padding';
      divRow.appendChild(textContainer);
      textContainer.appendChild(textp);
      textp.appendChild(textnode);
    }
  }
  function quoteContent(i) {
    var LContent = LoadContent().content;
    divRow = d$2.getElementsByClassName('FyrirlesturWidth')[0]; // <Div>

    var quoteContent = d$2.createElement('div'); // <quote> og <caption>

    var quote = d$2.createElement('quote');
    var caption = d$2.createElement('caption'); // <textNodes>

    var quoteNode = d$2.createTextNode(LContent[i].data);
    var captionNode = d$2.createTextNode(LContent[i].caption);
    quoteContent.className = 'Content__quoteContainer Content__padding';
    quote.className = 'Content__quote';
    caption.className = 'Content__caption';
    divRow.appendChild(quoteContent);
    quoteContent.appendChild(quote);
    quoteContent.appendChild(caption);
    quote.appendChild(quoteNode);
    caption.appendChild(captionNode);
  }
  function imageContent(i) {
    var LContent = LoadContent().content;
    divRow = d$2.getElementsByClassName('FyrirlesturWidth')[0];
    var imageContent = d$2.createElement('div');
    var image = d$2.createElement('img');
    var caption = d$2.createElement('caption');
    var captionNode = d$2.createTextNode(LContent[i].caption);
    caption.appendChild(captionNode);
    image.src = LContent[i].data;
    imageContent.className = 'Content__imageContainer Content__padding';
    image.className = 'Content__image';
    caption.className = 'Content__captionImg';
    divRow.appendChild(imageContent);
    imageContent.appendChild(image);
    imageContent.appendChild(caption);
  }
  function headingContent(i) {
    var LContent = LoadContent().content;
    divRow = d$2.getElementsByClassName('FyrirlesturWidth')[0];
    var headingContent = d$2.createElement('div');
    var heading = d$2.createElement('h2');
    var headingNode = d$2.createTextNode(LContent[i].data);
    headingContent.className = 'Content__heading Content__padding';
    heading.appendChild(headingNode);
    headingContent.appendChild(heading);
    divRow.appendChild(headingContent);
  }
  function listContent(i) {
    var LContent = LoadContent().content;
    divRow = d$2.getElementsByClassName('FyrirlesturWidth')[0];
    var listContent = d$2.createElement('div');
    var listUl = d$2.createElement('ul');
    listContent.className = 'Content__list Content__padding';
    listContent.appendChild(listUl);
    divRow.appendChild(listContent);

    for (var j = 0; j < LContent[i].data.length; j += 1) {
      var _listUl = d$2.getElementsByClassName('FyrirlesturWidth')[0].children[i].children[0];
      var itemLi = d$2.createElement('li');
      var itemNode = d$2.createTextNode(LContent[i].data[j]);
      itemLi.className = 'Content__listItem';
      itemLi.appendChild(itemNode);

      _listUl.appendChild(itemLi);
    }
  }
  function codeContent(i) {
    var LContent = LoadContent().content;
    divRow = d$2.getElementsByClassName('FyrirlesturWidth')[0];
    var codeContent = d$2.createElement('div');
    codeContent.className = 'Content__codeContainer Content__padding';
    divRow.appendChild(codeContent);
    var paragraphs = LContent[i].data.split('\n');

    for (var j = 0; j < paragraphs.length; j += 1) {
      var code = d$2.createElement('p');
      var textNode = d$2.createTextNode(paragraphs[j]);

      if (textNode.wholeText === '') {
        code.className = 'Content__padding';
      } else {
        code.className = 'Content__code';
      }

      code.appendChild(textNode);
      codeContent.appendChild(code);
    }
  }
  function Footer() {
    var LContent = LoadContent().content;
    divRow = d$2.getElementsByClassName('FyrirlesturWidth')[0];
    var klaraContent = d$2.createElement('div');
    klaraContent.className = 'Footer__Container Content__padding';
    divRow.appendChild(klaraContent);
    var text1 = d$2.createElement('p');
    var link1 = d$2.createElement('a');
    var node1 = d$2.createTextNode('Klára fyrirlestur');
    text1.appendChild(link1.appendChild(node1));
    text1.className = 'Footer__KlaraFyrirlestur';
    text1.id = 'ErHannKominn';
    var text2 = d$2.createElement('p');
    var link2 = d$2.createElement('a');
    var node2 = d$2.createTextNode('Tilbaka');
    text2.appendChild(link2.appendChild(node2));
    text2.className = 'Footer__Tilbaka';
    klaraContent.appendChild(text1);
    klaraContent.appendChild(text2);
  }
  function GraentEdaEkki() {
    if (JSON.parse(localStorage.getItem('BunirFyrirlestrar')) !== null) {
      var Fyrirlestrar = JSON.parse(localStorage.getItem('BunirFyrirlestrar'));

      var _LoadContent = LoadContent(),
          slug = _LoadContent.slug;

      for (var i in Fyrirlestrar) {
        // for (let i = 0; i < JSON.parse(localStorage.getItem('BunirFyrirlestrar')).length; i+=1 ) {
        if (i === slug) {
          if (Fyrirlestrar[i] === 'Oklarad') {
            var text11 = d$2.getElementById('ErHannKominn');
            text11.className = 'Footer__KlaraFyrirlestur';
          } else if (Fyrirlestrar[i] === 'Klarad') {
            var _text = d$2.getElementById('ErHannKominn');

            _text.className = 'Footer__KlaraFyrirlestur Footer__FyrirlesturBuinn';
          }
        }
      }
    }
  }

  var divRow$1; // let content;

  var jsonSkra;
  var LContent;
  var d$3 = document;
  function fyrirlestur() {
    // jsonSkra = JSON.parse(localStorage["json-file"]);
    for (var i = 0; i < localStorage.length; i += 1) {
      if (localStorage.key(i) !== 'slug' && localStorage.key(i) !== 'BunirFyrirlestrar') {
        var X = JSON.parse(localStorage.getItem(localStorage.key(i))).slug;
        var Y = JSON.parse(localStorage.getItem('slug'));

        if (Y === X) {
          jsonSkra = JSON.parse(localStorage.getItem(localStorage.key(i))); // Setjum nú gögnin í geymslu, svo við getum sótt þau þegar við
          // förum í Content.js

          SaveContent(jsonSkra);
        }
      }
    }

    jsonSkra = LoadContent();
    LContent = jsonSkra.content;
    var divMain = d$3.querySelector('main');
    divRow$1 = d$3.createElement('div');
    divRow$1.className = 'FyrirlesturWidth';
    divMain.appendChild(divRow$1); // content =

    var header = d$3.querySelector('header');
    var span = d$3.createElement('span');
    var h1 = d$3.createElement('h1');
    span.className = 'heading__category';
    h1.className = 'heading__title';
    header.appendChild(span);
    header.appendChild(h1);
    span.appendChild(d$3.createTextNode(jsonSkra.category));
    h1.appendChild(d$3.createTextNode(jsonSkra.title)); // If site contains video
    // const isVideoPage = page.classList.contains('videoPlayer');

    for (var _i = 0; _i < LContent.length; _i += 1) {
      if (LContent[_i].type === 'youtube') {
        youtubeContent(_i);
      } else if (LContent[_i].type === 'text') {
        // textContent(i);
        textContent(_i);
      } else if (LContent[_i].type === 'quote') {
        quoteContent(_i);
      } else if (LContent[_i].type === 'image') {
        imageContent(_i);
      } else if (LContent[_i].type === 'heading') {
        headingContent(_i);
      } else if (LContent[_i].type === 'list') {
        listContent(_i);
      } else if (LContent[_i].type === 'code') {
        codeContent(_i);
      }
    }

    Footer();
    GraentEdaEkki(); // if (isVideoPage){
    //   videoPlayer();
    // }
  }
  function klaraFyrirlestur(event) {
    if (event.target.className === 'Footer__KlaraFyrirlestur' || event.target.className === 'Footer__KlaraFyrirlestur Footer__FyrirlesturBuinn') {
      FyrirlesturBuinToggle();
      GraentEdaEkki();
    }
  }
  function FaraAForsidu(event) {
    if (event.target.className === 'Footer__Tilbaka') {
      window.location.replace('index.html');
    }
  }

  var jsonList;
  document.addEventListener('DOMContentLoaded', function () {
    var page = document.querySelector('body');
    var isLecturePage = page.classList.contains('lecture-page');

    if (isLecturePage) {
      fyrirlestur();
      document.addEventListener('click', function () {
        klaraFyrirlestur(event);
        FaraAForsidu(event);
      });
    } else {
      var list = new List();
      jsonList = JSON.parse(localStorage.getItem('json-file'));
      document.addEventListener('click', function () {
        toggle(event);
        empty(list.container);
        list.upploadClasses(jsonList);
        fyrirlesturBirta(event);
      });
    }
  });

}());
//# sourceMappingURL=bundle.js.map
