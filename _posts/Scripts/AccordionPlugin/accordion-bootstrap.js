$(function () {
    var accordionUrl = $('#accordionurl').val();
    var views = {
        accordionView: new Honeywell.ISP.Accordion.AccordionView({
            baseUrl: accordionUrl,
            viewName: 'accordion-pane'
        })
    };
});