$(function () {
    $('.tree li ul').hide();
    $('.tree li').addClass('parent_li').find(' > span');
    $('.tree li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul');
        if (children.is(":hidden")) {
            children.show('fast');
            $(this).find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
            $(this).addClass('treeitemactive');
            $(".tree li.parent_li > span").not($(this)).removeClass('treeitemactive');
        } else {
            children.hide('fast');
            $(this).find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
            $(".tree li.parent_li > span").addClass('treeitemactive');
            $(".tree li.parent_li > span").not($(this)).removeClass('treeitemactive');
        }
        e.stopPropagation();
    });
});





$(document).ready(function () {

    ko.bindingHandlers.autoFilter = {
        update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            if (value) {
                var wrapperClassName = value.wrapperClassName;
                $(element).on('keyup paste', function () {
                    var searchText = !!$(element).val() ? $(element).val().toLowerCase() : '';
                    var selector = '.' + wrapperClassName + ' .search-item';

                    var test = $('.helpsearch').val();

                    $(selector).each(function () {
                        var excludeOthers = false;
                        $(this).find(".search-item-text").each(function () {
                            var elValue = $(this).text();
                            //var sss = elValue.parent("span").addClass("dfsdfsdfdsf");

                            if (elValue) {
                                elValue = elValue.toLowerCase();
                                if (elValue.indexOf(searchText) >= 0 || searchText.length < 1) {

                                    var parentEl = $(this).closest(".search-item");
                                    // $(this).addClass("testing");



                                    if (parentEl) {



                                        var test = $('.helpsearch').val();
                                        if ('test:contains(elValue)') {



                                            parentEl.css("display", "block").addClass("icon-control");
                                            $(this).parents('ul').css('display', 'block');


                                            //if (iconchange) {
                                            //    $(this).parents('ul.list-level2').css('display', 'block');
                                            //}
                                            //else {
                                            //    $(this).next().children('ul.list-level2').css('display', 'none');
                                            //}


                                            //$(this).prevUntil(('li').css('display') == 'block').addClass("eeeee");

                                            var iconchange = $(this).parents().hasClass('list-level2');
                                            var iconchanges = $(this).parents().hasClass('list-level1');
                                            var ddd = $(this).parents("li.main-par").find('i');
                                            var eee = $(this).parents(".list-level1").prev("span").find('i');



                                            if (test == elValue) {

                                                $(this).parent("span").addClass("treeitemactive");

                                                var rrr = $(this).parent("span").find("a").attr('href');
                                                $('.contentarea iframe').attr('src', rrr)
                                          


                           



                                                if (iconchange) {
                                                    ddd.addClass("icon-minus-sign");
                                                    eee.addClass("icon-minus-sign");

                                                }
                                                else {
                                                    ddd.removeClass("icon-minus-sign");
                                                    // $(this).parent(".list-level1").prev("span").find('i');

                                                    // eee.removeClass("icon-minus-sign");
                                                }







                                                if (iconchanges) {
                                                    eee.addClass("icon-minus-sign");

                                                }
                                                else {
                                                    eee.removeClass("icon-minus-sign");
                                                    // $(this).parent(".list-level1").prev("span").find('i');

                                                    // eee.removeClass("icon-minus-sign");
                                                }




                                                // parentEl.not(find('i')).removeClass("icon-minus-sign");
                                                // testerr.addClass("eeee");


                                                // $(this).parents('i').addClass('adsfdfdsf');


                                                //mytest.find('i').addClass('icon-minus-sign');

                                            }
                                            else {
                                                $(this).parent("span").removeClass("treeitemactive");

                                                ddd.removeClass("icon-minus-sign");
                                                // parentEl.css("display", "block");
                                            }
                                        }



                                        // parentEl.find('ul').css("display", "block");
                                        excludeOthers = true;


                                        if (test == '') {
                                            $('.help_parent li').css("display", "block");
                                            $('.help_parent li ul').css("display", "none");
                                            $('.help_parent').find('i').removeClass("icon-minus-sign")
                                        }


                                    }


                                }
                                else if (!excludeOthers) {
                                    // var elValue = $(this).text();
                                    // $('.help_parent .search-item').css('display','block')
                                    var parentEl = $(this).closest(".search-item");
                                    parentEl.find("ul").hide();


                                    if (parentEl) {
                                        parentEl.hide().removeClass("icon-control");
                                    }
                                }
                            }
                        });
                    });
                });
            }
        }
    }







});