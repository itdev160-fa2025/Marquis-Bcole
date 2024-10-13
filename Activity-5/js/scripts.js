var data = [
    {
        name: 'Settings Sync',
        description: 'The Settings Sync extension, previously known as Visual Studio Code Settings Sync, synchronizes settings, snippets, themes, keybindings, workspaces, extensions, and more across multiple machines.',
        author: 'Shan Khan',
        url: 'https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync',
        downloads: 4034787,
        stars: 713,
        price: 'Free',
        selector: 'p1'
    },
    {
        name: 'Stylelint',
        description: 'stylelint is an extension that lints CSS, SCSS, and Less.',
        author: 'Stylelint.io',
        url: 'https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint',
        downloads: 2489920,
        stars: 205,
        price: 'Free',
        selector: 'p2'
    }
];

function package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.url = data.url;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function() {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function() {
        return this.stars.toLocaleString();
    };
}

var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

var getEl = function(id) {
    return document.getElementById(id);
};

var writePackageInfo = function(package) {
    var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downEl = getEl(selector + '-download'),
        starsEl = getEl(selector + '-stars');

    nameEl.textContent = package.name;
    descEl.textContent = package.description;
    authEl.textContent = "Author: " + package.author;
    downEl.textContent = "Downloads: " + package.getFormattedDownloads();
    starsEl.textContent = "stars: " + package.getFormattedStars();
};

var init = function() {
    var dateEl = getEl('Date');
    dateEl.textContent = getTodaysDate();

    var settingsSync = new package(data[0]);
    writePackageInfo(settingsSync);

    var stylelint = new package(data[1]);
    writePackageInfo(stylelint);
};

init();
