define(["require", "exports", "./JQueryUI", "../common/on", "../JQte/OnInsert", "jquery"], function (require, exports, impJQueryUI, impOn, impJqteOnInsert, jQuery) {
    "use strict";
    var ControlCommon;
    (function (ControlCommon) {
        var Code = (function () {
            function Code() {
            }
            Code.AttachClick = function () {
                jQuery("#control-common-execute").on("click", function () {
                    Code.DestroyResizable();
                    Code.Execute();
                    return false;
                });
            };
            Code.Execute = function () {
                window.setTimeout(function () {
                    impOn.On.Code.Execute();
                    new impJqteOnInsert.OnInsert.Code().Init();
                    impJQueryUI.JQueryUI.CommonCode.ResizableColumn();
                    impJQueryUI.JQueryUI.CommonCode.Resizable(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image");
                    //impJQueryUI.JQueryUI.CommonCode.ResizableText(".empty-container-text");
                    impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other", "s");
                    impJQueryUI.JQueryUI.CommonCode.JustResizable(".adjust-image-text-other-left", "e");
                    impJQueryUI.JQueryUI.CommonCode.Draggable(".jq-normal-link .empty-container, .empty-container-menu, .empty-container-text, .empty-container-image, .empty-container-spacer", "");
                    jQuery(".empty-container-text, .empty-container-image").css("z-index", "0");
                    jQuery(".column").each(function () {
                        if (jQuery(this).children(".image-text-other.empty-container-image, .image-text-other.empty-container-text, .row, .column").length == 0) {
                            jQuery(this).addClass("empty");
                            if (jQuery(this).find(".empty-drop-element").length == 0) {
                                jQuery(this).append("<div class='image-text-other empty-drop-element' ></div>");
                            }
                        }
                        else {
                            jQuery(this).removeClass("empty");
                            jQuery(this).find(".empty-drop-element").remove();
                        }
                    });
                    //should be optimized....
                    jQuery(".image-text-other, .empty-container-empty").each(function (index, _this) {
                        var $this = jQuery(_this);
                        var bottom = $this.offset().top + $this.height();
                        var top = $this.offset().top;
                        var left = $this.offset().left;
                        $this.attr("top", top);
                        $this.attr("bottom", bottom);
                        $this.attr("left", left);
                    });
                    impJQueryUI.JQueryUI.CommonCode.Droppable(".column, .empty-container, .image-text-other");
                    jQuery(".ui-resizable-e").html("<div class='jq-square jq-square-e'></div>");
                    jQuery(".ui-resizable-se").html("<div class='jq-square jq-square-se'></div>");
                    jQuery(".ui-resizable-s").html("<div class='jq-square jq-square-s'></div>");
                    //jQuery(".ui-resizable-w").html("<div class='jq-square jq-square-e'></div>");
                    //jQuery(".ui-resizable-n").html("<div class='jq-square jq-square-s'></div>");
                }, 10);
                $("#watch-height").trigger("click");
            };
            Code.DestroyResizable = function () {
                impJQueryUI.JQueryUI.CommonCode.DroppableDestroy(".column, .empty-container, .image-text-other");
                impJQueryUI.JQueryUI.CommonCode.DraggableDestroy(".jq-normal-link, .empty-container, .empty-container-menu, .empty-container-text .empty-container-image, .empty-container-spacer");
                impJQueryUI.JQueryUI.CommonCode.ResizableDestroy(".jq-normal-link, .jq-plus-container-text, .jq-plus-container-image, .column, .empty-container, .root-elements, .adjust-image-text-other, .adjust-image-text-other-left");
            };
            Code.AnchorClicked = false;
            return Code;
        }());
        ControlCommon.Code = Code;
    })(ControlCommon = exports.ControlCommon || (exports.ControlCommon = {}));
});
//# sourceMappingURL=ControlCommonJQ.js.map