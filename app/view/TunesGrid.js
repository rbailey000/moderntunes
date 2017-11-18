Ext.define('MTunes.view.TunesGrid', {
    extend: 'Ext.grid.Grid',
    xtype: 'tunesgrid',
    requires: [
        'Ext.grid.column.Column',
        'Ext.grid.column.Template',

        //'Ext.grid.column.Widget',
        //'Ext.ux.rating.Picker'
    ],

    columns: [{
            text: 'Artist',
            dataIndex: 'sortArtist',
            width: 120
        }, {
            xtype: 'templatecolumn',
            text: 'Title',
            dataIndex: 'title',
            flex: 1.5,
        }, {
            text: 'Rating',
            dataIndex: 'release_date',
            width: 60,
            align: 'right',
            width: 120
        }, {
            xtype: 'templatecolumn',
            text: 'Thumbnail',
            dataIndex: 'image',
            tpl: '<img src={image} />',
            flex: 1
        }]
        //html: '<span style="font-size:24px;font-style:italic;color:red">Tunes Grid</span>'
});