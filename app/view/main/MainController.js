Ext.define('MTunes.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    requires: [
        'MTunes.view.Preview',
        'Ext.Video'
    ],

    showPreview: function(record) {
        this.getView().add({
            xtype: 'mypreview',
            title: record.data.title,
            buttons: {
                cancel: {
                    html: '<span style="font-size:24px">X</span>', // Overriding the standard button text
                    handler: function(button) {
                        button.up('mypreview').hide();
                    }
                }
            },
            items: [{
                xtype: 'video',
                url: record.data.preview,
                posterUrl: record.data.image
            }],

        }).show();
    },

    thumbsSelect: function(thumbs, record) {
        var me = this;
        me.showPreview(record);
    },

    gridSelect: function(grid, records) {
        var me = this;
        me.showPreview(records[0]);
    }
});