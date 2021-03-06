﻿
import impError = require("../../typescript/error/errorjq");
import impWatch = require("../Watch/WatchMouseJQ");
import impUndoManager = require("../UndoManager/UndoManager");
import impCommonCode = require("../Controls/ControlCommonJQ");
import * as jQuery from "jquery";
var initOnceFlag = false;

export module Html {

    export class HtmlJQ {

        public Init() {

            if (initOnceFlag == false) {
                initOnceFlag = true;
                this.AttachEvents();
            }
        }

     
        public static IsExternalUrl: boolean;

        public AttachEvents() {

            jQuery(".action-button-insert-html-clear").on("click" ,function () {

                jQuery(".input-html").val("");

            });

            jQuery(".action-button-insert-html").on("click" ,function () {

                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;  

                if (selectedElement != undefined) {

                    var html = jQuery(".input-html").val()

                    var htmlObj = jQuery(document.createElement("div"));

                    htmlObj.css("float", "left");
                    htmlObj.addClass("key empty-container design-empty-css");
                    htmlObj.css("height", "100px");

                    htmlObj.append(jQuery.parseHTML(html, document, true));

                    var innerHtml = jQuery(htmlObj).html();

                    selectedElement.append(htmlObj);

                    var undo = new impUndoManager.Manager.UndoManager();

                    undo.BeforeOperation();

                    impCommonCode.ControlCommon.Code.DestroyResizable();
                    impCommonCode.ControlCommon.Code.Execute();
                }

                jQuery("#control-insert-html").hide();
            });
        }

        public static Show() {

            jQuery(".control-page").removeClass("control-active");
            jQuery("#control-insert-html").addClass("control-active");

            jQuery("#control-insert-html").show();
            jQuery(".input-html").val("");
        }

        public static Close() {

        }      

        public static ProcessSelectNotify() {

        }
    }
}