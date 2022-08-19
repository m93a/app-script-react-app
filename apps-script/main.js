const data = [
    12,
    'xy',
    {
        text: 'ahoj'
    }
];

function doGet() {
    const template = HtmlService.createTemplateFromFile("index");
    template.value = "tvoje mamka";
    return template.evaluate();
}

function getData() {
    return data;
}
