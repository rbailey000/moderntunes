Ext.define('MTunes.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    requires: [
        'MTunes.model.Tune'
    ],
    stores: {
        tunes: {
            model: 'MTunes.model.Tune',
            sorters: ['sortArtist', 'title'],
            autoLoad: true
        }
    }
});