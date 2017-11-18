Ext.define('MTunes.view.TunesView', {
    extend: 'Ext.dataview.DataView',
    xtype: 'tunesview',

    scrollable: true,
    itemTpl: [
        '<figure>',
        '<img src="{image}">',
        '<figcaption><b>{title}</b><br>{artist}</figcaption><br>',
        '</figure>'
    ],
    itemCls: 'video',
    // overItemCls: 'overvideo',
    // selectedItemCls: 'selected'
    //html: '<span style="font-size:24px;font-style:italic;color:green">Tunes Thumbnails</span>'
});