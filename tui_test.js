var Grid = require('tui-grid');


var grid = new tui.Grid({
    el: $('#grid'),
    scrollX: false,
    scrollY: false,
    columns: [
        {
            title: 'Cover Image',
            name: 'id',
            align: 'center',
            formatter: function(value) {
                var albumId = value.toString();
                var imageId = albumId.substring(0, albumId.length - 2);
                var url = 'http://image.bugsm.co.kr/album/images/200/' + imageId + '/' + albumId + '.jpg'

                return '<img src="' + url + '" width="40" height="40" />';
            }
        },
        {
            title: 'Name',
            name: 'name',
            formatter: function(value, rowData) {
                var albumId = rowData.id;
                var url = 'http://music.bugs.co.kr/album/' + albumId;

                return '<a href="' + url + '" target="_blank">' + value + '</a>';
            }
        },
        {
            title: 'Artist',
            name: 'artist',
            formatter: function(value) {
                var url = 'http://search.bugs.co.kr/artist?q=' + value;

                return '<a href="' + url + '" target="_blank">' + value + '</a>';
            }
        },
        {
            title: 'Type',
            name: 'type'
        },
        {
            title: 'Release',
            name: 'release',
            formatter: function(value) {
                return value.replace(/\./g, '-');
            }
        },
        {
            title: 'Genre',
            name: 'genre'
        }
    ]
});

grid.setData(gridData);