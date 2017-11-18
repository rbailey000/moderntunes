Ext.define('MTunes.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'MTunes.view.main.MainController',
        'MTunes.view.main.MainModel',

        'MTunes.view.TunesGrid',
        'MTunes.view.TunesView',

        'Ext.layout.Fit'
    ],
    tabBarPosition: 'bottom',
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    items: [{
        title: 'Thumbnails',
        xtype: 'tunesview',
        bind: {
            store: '{tunes}'
        },
        listeners: {
            select: 'thumbsSelect'
        }
    }, {
        title: 'Grid',
        xtype: 'tunesgrid',
        bind: {
            store: '{tunes}'
        },
        listeners: {
            select: 'gridSelect'
        }
    }]
});