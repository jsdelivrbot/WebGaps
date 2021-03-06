define(["require", "exports", "../Controls/ControlCommonJQ", "../UndoManager/UndoManager", "../Error/ErrorJQ", "../_Classes/Auth", "../Preview/Preview", "../Constants/ConstantsJQ", "../InsertTool/InsertToolJQ", "../jqte/OnInsert", "jquery"], function (require, exports, impCommonCode, impUndoManager, impError, impAuth, impPreview, impStatic, impInsertTool, impOnInsert, jQuery) {
    "use strict";
    var Page;
    (function (Page) {
        var LoadJQ = (function () {
            function LoadJQ() {
            }
            LoadJQ.LoadPage = function (siteId, siteName, pageName) {
                var url = "/services/sites/" + jQuery(".input-site-id").val() + "/" + jQuery(".input-site-name").val() + "/" + jQuery(".input-page-name").val();
                jQuery.ajax({
                    url: url,
                    type: "GET",
                    cache: false,
                    success: function (data) {
                        impAuth.Auth.AuthJQ.HideLoading();
                        //console.log("isloadhit");
                        var e = jQuery(document.createElement("div"));
                        var pg = jQuery(document.createElement("div"));
                        e.html(data); //.find("page").remove(".ui-resizable-handle");
                        pg.append(e.html());
                        var pgResizableRemoved = pg;
                        if (pgResizableRemoved.find("page").length > 0) {
                            jQuery("page").html(pgResizableRemoved.find("page").html());
                            try {
                                jQuery("page").attr("style", pgResizableRemoved.find("page").attr("style"));
                            }
                            catch (ex) {
                            }
                            //jQuery("page .jqte-editor").attr("contentEditable", "true");
                            jQuery(".main-page-column").css("border", "1px solid #29adef");
                            jQuery("page .empty-container-text").find(".jq-text-block-container").find("*").not(".ui-resizable-handle").css("cursor", "move");
                            jQuery("page .jqte-editor").attr("tabindex", "1");
                            impStatic.Constants.StaticJQ.normalLinkId = jQuery("page .jq-normal-link").length + 10;
                            impStatic.Constants.StaticJQ.editorLinkId = jQuery("page .jq-editor-link").length + 10;
                            jQuery(".page .design-page-row").hide();
                            jQuery(".page").show();
                            impPreview.Preview.PreviewJQ.ClosePreview();
                            jQuery("#control-templates").hide();
                            var c = new impOnInsert.OnInsert.Code();
                            c.Init();
                            impCommonCode.ControlCommon.Code.DestroyResizable();
                            impCommonCode.ControlCommon.Code.Execute();
                            var insert = new impInsertTool.InsertTool.InsertToolJQ();
                            insert.Process();
                            var undo = new impUndoManager.Manager.UndoManager();
                            undo.BeforeOperation();
                            jQuery(window).scrollTop();
                        }
                        else {
                            jQuery("#control-templates").show();
                        }
                        jQuery(".jq-row-plus-container").hide();
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionSuccess("Your page is loading. <br>Please wait...");
                    },
                    error: function (e) {
                        impAuth.Auth.AuthJQ.HideLoading();
                        var errorHandler = new impError.ErrorHandle.ErrorJQ();
                        errorHandler.ActionFail("Page Loading Failed ! <br> Try again latter");
                    }
                });
            };
            return LoadJQ;
        }());
        Page.LoadJQ = LoadJQ;
    })(Page = exports.Page || (exports.Page = {}));
});
//# sourceMappingURL=LoadJQ.js.map