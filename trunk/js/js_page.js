imgr = new Array();
showRandomImg = true;
labelnumposts = 101;
labelnumposts1 = 12;
showPostDate = true;
var thumbnail_mode = "no-float" ;
summary_noimg = 0; summary_img = 0; 
relatednumposts=4;
newimgwidth = 29;
newimgheight = 19;
sumtitle = 35;
labelsumtitle = 64;
function removeHtmlTag(_0x451dx2, _0x451dx3) {
    for (var _0x451dx4 = _0x451dx2['split']('<'), _0x451dx5 = 0; _0x451dx5 < _0x451dx4['length']; _0x451dx5++) {
        -1 != _0x451dx4[_0x451dx5]['indexOf']('>') && (_0x451dx4[_0x451dx5] = _0x451dx4[_0x451dx5]['substring'](_0x451dx4[_0x451dx5]['indexOf']('>') + 1, _0x451dx4[_0x451dx5]['length']));
    };
    _0x451dx4 = _0x451dx4['join']('');
    return _0x451dx4['substring'](0, _0x451dx3 - 1);
};


function chitietsp(_0x451dx2, _0x451dx3, _0x451dx4) {
	var _idArr = _0x451dx2.substring(7);	
    var _0x451dx2 = document['getElementById'](_0x451dx2),
        _0x451dx5 = '',
        _0x451dx7 = _0x451dx2['getElementsByTagName']('img');
    1 <= _0x451dx7['length'] && (_0x451dx5 = '<img src="' + _0x451dx7[0]['src'] + '"/>');
    var _0x451dx9 = _0x451dx2['innerHTML']['substring'](_0x451dx2['innerHTML']['indexOf']('[tomtat]') + 8, _0x451dx2['innerHTML']['indexOf']('[/tomtat]')),
        _0x451dxa = _0x451dx2['innerHTML']['substring'](_0x451dx2['innerHTML']['indexOf']('[giaban]') + 8, _0x451dx2['innerHTML']['indexOf']('[/giaban]'));
    
    tintuc = _0x451dx2['innerHTML']['substring'](_0x451dx2['innerHTML']['indexOf']('[tintuc]') + 8, _0x451dx2['innerHTML']['indexOf']('[/tintuc]'));
    kythuat = -1 != _0x451dx2['innerHTML']['indexOf']('[kythuat]') ? _0x451dx2['innerHTML']['substring'](_0x451dx2['innerHTML']['indexOf']('[kythuat]') + 9, _0x451dx2['innerHTML']['indexOf']('[/kythuat]')) : '<b>Th\xF4ng s\u1ED1 k\u1EF9 thu\u1EADt ch\u01B0a \u0111\u01B0\u1EE3c c\u1EADp nh\u1EADt</b>';
    mota = -1 != _0x451dx2['innerHTML']['indexOf']('[mota]') ? _0x451dx2['innerHTML']['substring'](_0x451dx2['innerHTML']['indexOf']('[mota]') + 6, _0x451dx2['innerHTML']['indexOf']('[/mota]')) : '<b>Kh\xF4ng c\xF3 m\xF4 t\u1EA3 cho s\u1EA3n ph\u1EA9m n\xE0y</b>';
    hinhanh = -1 != _0x451dx2['innerHTML']['indexOf']('[mota]') ? _0x451dx2['innerHTML']['substring'](_0x451dx2['innerHTML']['indexOf']('[hinhanh]') + 9, _0x451dx2['innerHTML']['indexOf']('[/hinhanh]')) : '<b>Kh\xF4ng c\xF3 h\xECnh \u1EA3nh cho s\u1EA3n ph\u1EA9m n\xE0y</b>';
  _0x451dx2['innerHTML'] = -1 != _0x451dx2['innerHTML']['indexOf']('[tintuc]') ? '<div class="tintuc"><h2 class="newstitle"><a href="' + _0x451dx4 + '">' + _0x451dx3 + '</a></h2><p>' + tintuc + '</p><div class="clear"></div>' : '<div class="w-detail group simpleCart_shelfItem"><div id="img_'+_idArr+'" class="large-6 medium-6 column"><a class="th" href="' + _0x451dx7[0]['src'] + '">' + _0x451dx5 + ' </a><div class="addthis_toolbox addthis_default_style "><a class="addthis_button_preferred_1"></a><a class="addthis_button_preferred_2"></a><a class="addthis_button_preferred_3"></a><a class="addthis_button_preferred_4"></a><a class="addthis_button_compact"></a><a class="addthis_counter addthis_bubble_style"></a></div></div><div class="large-6 medium-6 column"><div class="title item_name">' + _0x451dx3 +  '</div><div class="w-giaban">Gía bán: <b class="item_price">'+ _0x451dxa +'</b></div>' + _0x451dx9 + '<br/><br/><div class="boxbuy"><div class="soluong"><input type="number" name="quantity" min="1" max="100" value="1" class="item_quantity"></div><div class="btnMore"><a title ="" target="_blank" href="javascript:void(0);" class="item_add addtocart" rel="'+_idArr+'">\u0110\u1EB7t h\xE0ng</a></div></div></div><div class="clear"></div><div id="horizontalTab" class="r-tabs"><div class="tab-side r-tabs-nav"><div class="r-tabs-state-default r-tabs-tab"><a class="active" href="#tab-1">Chi tiết sản phẩm</a></div></div><div class="tabs-container">' + kythuat + '</div></div></div>';
};
function homepage(_0x451dx2, _0x451dx3, _0x451dx4) {
	var _idArr = _0x451dx2.substring(7);	
    var _0x451dx2 = document['getElementById'](_0x451dx2),
        _0x451dx5 = '',
        _0x451dx7 = _0x451dx2['getElementsByTagName']('img');
    1 <= _0x451dx7['length'] && (_0x451dx5 = '<img src="' + _0x451dx7[0]['src'] + '"/>');
    price = _0x451dx2['innerHTML']['substring'](_0x451dx2['innerHTML']['indexOf']('[giaban]') + 8, _0x451dx2['innerHTML']['indexOf']('[/giaban]'));
    sumpost = _0x451dx2['innerHTML']['substring'](_0x451dx2['innerHTML']['indexOf']('[tintuc]') + 8, _0x451dx2['innerHTML']['indexOf']('[/tintuc]'));
  _0x451dx3 = -1 != _0x451dx2['innerHTML']['indexOf']('[tintuc]') ? '' : '<div class="box_item simpleCart_shelfItem"><div id="img_'+_idArr+'" class="img"><a  href="' + _0x451dx4 + '">' + _0x451dx5 + '</a></div><div class="pro_content"><div class="clear"></div><div class="p_title"><a href="' + _0x451dx4 + '" class="item_name">' + removeHtmlTag(_0x451dx3, sumtitle) + '</a></div><div class="clear"></div><div class="gia_ban"><b class="item_price">' + price + ' </b><b>&nbsp;₫</b></div><div class="p_price"><a class="addtocart" rel="'+_idArr+'"  href="javascript:void(0);"><span class="item_add view_lft"><i class="fa fa-shopping-cart"></i> Mua</span></a><a href="' + _0x451dx4 + '"><span class="view_rgt"><i class="fa fa-eye"> Chi tiết</i></span></a></div></div></div>';
    _0x451dx2['innerHTML'] = _0x451dx3;
};
function relatedproduct(_0x451dx2) {
    j = showRandomImg ? Math['floor']((imgr['length'] + 1) * Math['random']()) : 0;
    img = [];
    for (var _0x451dx3 = 0; _0x451dx3 < _0x451dx2['feed']['entry']['length']; _0x451dx3++) {
        var _0x451dx4 = _0x451dx2['feed']['entry'][_0x451dx3]['content']['$t'];
    };
    for (_0x451dx4 = 0; _0x451dx4 < relatednumposts; _0x451dx4++) {
        var _0x451dx5 = _0x451dx2['feed']['entry'][_0x451dx4],
            _0x451dx7 = _0x451dx5['title']['$t'],
            _0x451dx9;
        if (_0x451dx4 == _0x451dx2['feed']['entry']['length']) {
            break;
        };
        for (var _0x451dxa = 0; _0x451dxa < _0x451dx5['link']['length']; _0x451dxa++) {
            if ('alternate' == _0x451dx5['link'][_0x451dxa]['rel']) {
                _0x451dx9 = _0x451dx5['link'][_0x451dxa]['href'];
                break;
            };
        };
        for (_0x451dxa = 0; _0x451dxa < _0x451dx5['link']['length']; _0x451dxa++) {
            if ('replies' == _0x451dx5['link'][_0x451dxa]['rel'] && 'text/html' == _0x451dx5['link'][_0x451dxa]['type']) {
                _0x451dx5['link'][_0x451dxa]['title']['split'](' ');
                break;
            };
        };
        var _0x451dx3 = 'content' in _0x451dx5 ? _0x451dx5['content']['$t'] : 'summary' in _0x451dx5 ? _0x451dx5['summary']['$t'] : '',
            _0x451dxc = _0x451dx3['substring'](_0x451dx3['indexOf']('[price]') + 7, _0x451dx3['indexOf']('[/price]'));
        postdate = _0x451dx5['published']['$t'];
        j > imgr['length'] - 1 && (j = 0);
        img[_0x451dx4] = imgr[j];
        s = _0x451dx3;
        a = s['indexOf']('<img');
        b = s['indexOf']('src="', a);
        c = s['indexOf']('"', b + 5);
        d = s['substr'](b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && '' != d && (img[_0x451dx4] = d);
        _0x451dx5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        postdate['split']('-')[2]['substring'](0, 2);
        _0x451dxa = postdate['split']('-')[1];
        postdate['split']('-');
        for (var _0x451dxc = _0x451dx3['substring'](_0x451dx3['indexOf']('[giaban]') + 8, _0x451dx3['indexOf']('[/giaban]')), _0x451dxd = 0; _0x451dxd < _0x451dx5['length'] && parseInt(_0x451dxa) != _0x451dx5[_0x451dxd]; _0x451dxd++) {;;
        }; - 1 != _0x451dx3['indexOf']('[tintuc]') ? document['write']('<li><a href="' + _0x451dx9 + '">' + _0x451dx7 + '</a></li><div class="clear"></div>') : document['write']('<div class="win-6 medium-4 large-3 column item"><div class="item-thumb"><a class="th" href="' + _0x451dx9 + '"><img title="' + _0x451dx7 + '" alt="' + _0x451dx7 + '" src="' + img[_0x451dx4] + '"/></a></div><div class="item-info"><div class="title"><a href="' + _0x451dx9 + '">' + _0x451dx7 + '</a></div><div class="price">Giá Bán:<span class="price_rgt">' + _0x451dxc + '</span></div></div><div class="clear"></div></div>');
        j++;
    };
};
function labelproduct(_0x451dx2) {
    j = showRandomImg ? Math['floor']((imgr['length'] + 1) * Math['random']()) : 0;
    img = [];
    for (var _0x451dx3 = 0; _0x451dx3 < labelnumposts; _0x451dx3++) {

		
        var _0x451dx4 = _0x451dx2['feed']['entry'][_0x451dx3],
            _0x451dx5 = _0x451dx4['title']['$t'],
            _0x451dx7;
		var _idArr = _0x451dx4['id']['$t'].split("post-");		
        if (_0x451dx3 == _0x451dx2['feed']['entry']['length']) {
            break;
        };
        for (var _0x451dx9 = 0; _0x451dx9 < _0x451dx4['link']['length']; _0x451dx9++) {
            if ('alternate' == _0x451dx4['link'][_0x451dx9]['rel']) {
                _0x451dx7 = _0x451dx4['link'][_0x451dx9]['href'];
                break;
            };
        };
        for (_0x451dx9 = 0; _0x451dx9 < _0x451dx4['link']['length']; _0x451dx9++) {
            if ('replies' == _0x451dx4['link'][_0x451dx9]['rel'] && 'text/html' == _0x451dx4['link'][_0x451dx9]['type']) {
                _0x451dx4['link'][_0x451dx9]['title']['split'](' ');
                break;
            };
        };
        _0x451dx9 = 'content' in _0x451dx4 ? _0x451dx4['content']['$t'] : 'summary' in _0x451dx4 ? _0x451dx4['summary']['$t'] : '';
        giaban = _0x451dx9['substring'](_0x451dx9['indexOf']('[giaban]') + 8, _0x451dx9['indexOf']('[/giaban]'));
        kythuat = -1 != _0x451dx9['indexOf']('[kythuat]') ? _0x451dx9['substring'](_0x451dx9['indexOf']('[kythuat]') + 9, _0x451dx9['indexOf']('[/kythuat]')) : '<b>Kh\xF4ng c\xF3 m\xF4 t\u1EA3 cho s\u1EA3n ph\u1EA9m n\xE0y</b>';
        postdate = _0x451dx4['published']['$t'];
        j > imgr['length'] - 1 && (j = 0);
        img[_0x451dx3] = imgr[j];
        s = _0x451dx9;
        a = s['indexOf']('<img');
        b = s['indexOf']('src="', a);
        c = s['indexOf']('"', b + 5);
        d = s['substr'](b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && '' != d && (img[_0x451dx3] = d);
        _0x451dx4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        postdate['split']('-')[2]['substring'](0, 2);
        _0x451dx9 = postdate['split']('-')[1];
        postdate['split']('-');
        for (var _0x451dxa = 0; _0x451dxa < _0x451dx4['length'] && parseInt(_0x451dx9) != _0x451dx4[_0x451dxa]; _0x451dxa++) {;;
        };
        _0x451dx5 = '<div class="win-6 medium-3 large-3 column item"><div class="box_item simpleCart_shelfItem"><div id="img_'+_idArr[1]+'" class="img"><a  href="' + _0x451dx7 + '"><img  class="item_thumb" src="' + img[_0x451dx3] + '" /></a></div><div class="pro_content"><div class="clear"></div><div class="p_title"><a href="' + _0x451dx7 + '" class="item_name">' + removeHtmlTag(_0x451dx5, labelsumtitle) + '</a></div><div class="gia_ban"><b class="item_price">' + giaban + ' </b><b>&nbsp;₫</b></div><div class="p_price"><a class="addtocart" rel="'+_idArr[1]+'" href="javascript:void(0);"><span class="item_add view_lft"><i class="fa fa-shopping-cart"></i> Mua</span></a><a href="' + _0x451dx7 + '"><span class="view_rgt"><i class="fa fa-eye"> Chi tiết</i></span></a></div></div></div></div> ';
        document['write'](_0x451dx5);
        j++;
    };
}

function lft_product(_0x451dx2) {
    j = showRandomImg ? Math['floor']((imgr['length'] + 1) * Math['random']()) : 0;
    img = [];
    for (var _0x451dx3 = 0; _0x451dx3 < labelnumposts; _0x451dx3++) {
        var _0x451dx4 = _0x451dx2['feed']['entry'][_0x451dx3],
            _0x451dx5 = _0x451dx4['title']['$t'],
            _0x451dx7;
        if (_0x451dx3 == _0x451dx2['feed']['entry']['length']) {
            break;
        };
        for (var _0x451dx9 = 0; _0x451dx9 < _0x451dx4['link']['length']; _0x451dx9++) {
            if ('alternate' == _0x451dx4['link'][_0x451dx9]['rel']) {
                _0x451dx7 = _0x451dx4['link'][_0x451dx9]['href'];
                break;
            };
        };
        for (_0x451dx9 = 0; _0x451dx9 < _0x451dx4['link']['length']; _0x451dx9++) {
            if ('replies' == _0x451dx4['link'][_0x451dx9]['rel'] && 'text/html' == _0x451dx4['link'][_0x451dx9]['type']) {
                _0x451dx4['link'][_0x451dx9]['title']['split'](' ');
                break;
            };
        };
        _0x451dx9 = 'content' in _0x451dx4 ? _0x451dx4['content']['$t'] : 'summary' in _0x451dx4 ? _0x451dx4['summary']['$t'] : '';
        giaban = _0x451dx9['substring'](_0x451dx9['indexOf']('[giaban]') + 8, _0x451dx9['indexOf']('[/giaban]'));
        kythuat = -1 != _0x451dx9['indexOf']('[kythuat]') ? _0x451dx9['substring'](_0x451dx9['indexOf']('[kythuat]') + 9, _0x451dx9['indexOf']('[/kythuat]')) : '<b>Kh\xF4ng c\xF3 m\xF4 t\u1EA3 cho s\u1EA3n ph\u1EA9m n\xE0y</b>';
        postdate = _0x451dx4['published']['$t'];
        j > imgr['length'] - 1 && (j = 0);
        img[_0x451dx3] = imgr[j];
        s = _0x451dx9;
        a = s['indexOf']('<img');
        b = s['indexOf']('src="', a);
        c = s['indexOf']('"', b + 5);
        d = s['substr'](b + 5, c - b - 5); - 1 != a && -1 != b && -1 != c && '' != d && (img[_0x451dx3] = d);
        _0x451dx4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        postdate['split']('-')[2]['substring'](0, 2);
        _0x451dx9 = postdate['split']('-')[1];
        postdate['split']('-');
        for (var _0x451dxa = 0; _0x451dxa < _0x451dx4['length'] && parseInt(_0x451dx9) != _0x451dx4[_0x451dxa]; _0x451dxa++) {;;
        };
        _0x451dx5 = '<div class="item_block group"><div class="b_thumb"><a  href="' + _0x451dx7 + '"><img src="' + img[_0x451dx3] + '" /></a></div><div class="b_info"><a href="' + _0x451dx7 + '">' + removeHtmlTag(_0x451dx5, labelsumtitle) + '</a><p>' + giaban + ' </p></div></div> ';
        document['write'](_0x451dx5);
        j++;
    };
}