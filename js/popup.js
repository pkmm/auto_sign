


getAllTieba();

$('#pkm').click(function () {
    chrome.tabs.create({
        url: 'https://github.com/pkmm',
        active: true,
    }, function (tab) {
        console.log(tab);
    });
});

