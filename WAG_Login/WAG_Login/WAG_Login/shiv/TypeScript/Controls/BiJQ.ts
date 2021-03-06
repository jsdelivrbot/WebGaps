﻿
import impError = require("../Error/ErrorJQ");
import impWatch = require("../Watch/WatchMouseJQ");
import impCommonCode = require("./ControlCommonJQ");
import impUnodManager = require("../UndoManager/UndoManager");

import impImage = require("../controls/imagejq");

import impCommon = require("../Common/CommonEvents");
import impCommonMethods = require("../common/commonmethodsjq");

import * as jQuery from "jquery";
import * as jQueryUI from "jqueryui";
jQueryUI;

var debug = true;


var isBIJQReady = false;

var nextId = 0;

export module BI {

    export class BIJQ {

        public Init() {

            jQuery(document).ready(function () {

                if (isBIJQReady == false) {
                    isBIJQReady = true;

                   


                    jQuery(".smart-menu-bi-control").spinner({

                        min: 0,
                        max: 2000,
                        step: 1,
                        

                        change: function (event, ui) {

                        },
                        spin: function (event, ui) {

                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                            if (selectedElement.hasClass("empty-container-text")) {
                                selectedElement = selectedElement.find(".jq-plus-container-text");
                            }

                            if (selectedElement != undefined) {

                                var height = jQuery(".smart-menu-bi-height").spinner("value");
                                var width = jQuery(".smart-menu-bi-width").spinner("value");

                                selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());

                            }
                        },
                        stop: function (event, ui) {

                            var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                            if (selectedElement.hasClass("empty-container-text")) {
                                selectedElement = selectedElement.find(".jq-plus-container-text");
                            }

                            if (selectedElement != undefined) {

                                var height = jQuery(".smart-menu-bi-height").spinner("value");
                                var width = jQuery(".smart-menu-bi-width").spinner("value");

                                selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());

                                var undo = new impUnodManager.Manager.UndoManager();

                                undo.BeforeOperation();
                            }
                        }
                    });                   
            

                    jQuery(".bi-browse").on("click" ,function () {

                        impImage.Image.SelfJQ.GetImages();

                        jQuery("#control-image-bi-library").show();
                    });

                    jQuery(".make-100").on("click" ,function () {

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement.hasClass("empty-container-text")) {
                            selectedElement = selectedElement.find(".jq-plus-container-text");
                        }

                        if (selectedElement != undefined) {
                            
                            jQuery(".ddn-bi-pixel-type").val("%");

                            var height = 100;
                            jQuery(".smart-menu-bi-height").spinner("value", height);

                            var width = 100;
                            jQuery(".smart-menu-bi-width").spinner("value", width);

                            selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }

                    });

                    jQuery(".ddn-bi-pixel-type").on("change" , function () {

                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement.hasClass("empty-container-text")) {
                            selectedElement = selectedElement.find(".jq-plus-container-text");
                        }

                        if (selectedElement != undefined) {
                            var height = jQuery(".smart-menu-bi-height").spinner("value");
                            var width = jQuery(".smart-menu-bi-width").spinner("value");

                            selectedElement.css("background-size", width + jQuery(".ddn-bi-pixel-type").val() + " " + height + jQuery(".ddn-bi-pixel-type").val());

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }

                    });

                    jQuery(".action-button-insert-bi-image").on("click" , function () {

                        var src = jQuery(".image-library-bi-select").first().attr("src");

                       

                        jQuery(".bi-selected-image").val(src).change();

                        jQuery(".image-library-image").removeClass("image-library-bi-select");
                        jQuery("#control-image-bi-library").hide();
                    });

                    jQuery(".control-bi-controls .bi-selected-image").on("change", function () {
                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement.hasClass("empty-container-text")) {
                            selectedElement = selectedElement.find(".jq-plus-container-text");
                        }

                        var applyToBody = jQuery(".bi-body").is(':checked'); 

                        if (applyToBody == true) {
                            jQuery("page").css("background-image", "url('" + jQuery(this).val() + "')");

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();

                            jQuery("#control-common-execute").trigger("click");
                        }
                        else
                        if (selectedElement != undefined) {

                            selectedElement.css("background-image", "url('" + jQuery(this).val() + "')");

                            if (selectedElement.hasClass("column")) {
                                selectedElement.addClass("bi-image-added");
                            }
                           
                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();

                            jQuery("#control-common-execute").trigger("click");

                        }
                        
                    });

                    jQuery(".control-bi-controls .internet-bi-image-url").on("change", function () {
                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement.hasClass("empty-container-text")) {
                            selectedElement = selectedElement.find(".jq-plus-container-text");
                        }

                        if (selectedElement != undefined) {

                            selectedElement.css("background-image", "url(" + jQuery(this).val() + ")");

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }
                    });


                    jQuery(".control-bi-controls .ddn-bi-repeat").on("change",function () {
                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement.hasClass("empty-container-text")) {
                            selectedElement = selectedElement.find(".jq-plus-container-text");
                        }

                        if (selectedElement != undefined) {
                            selectedElement.css("background-repeat", jQuery(this).val());

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }
                    });

                    jQuery(".control-bi-controls .ddn-bi-attachment").on("change", function () {
                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement.hasClass("empty-container-text")) {
                            selectedElement = selectedElement.find(".jq-plus-container-text");
                        }

                        if (selectedElement != undefined) {
                            selectedElement.css("background-attachment", jQuery(this).val());

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }
                    });

                    jQuery(".control-bi-controls .ddn-bi-position").on("change",function () {
                        var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                        if (selectedElement.hasClass("empty-container-text")) {
                            selectedElement = selectedElement.find(".jq-plus-container-text");
                        }

                        if (selectedElement != undefined) {
                            selectedElement.css("background-position", jQuery(this).val());

                            var undo = new impUnodManager.Manager.UndoManager();

                            undo.BeforeOperation();
                        }
                    });
                }

            });
                        
        }  
           

        public static isSelectProcessing = false;
        
        public static ProcessSelectNotify() {

            BIJQ.isSelectProcessing = true;

            try {
                var selectedElement = impWatch.Watch.MouseJQ.selectedElement;

                if (selectedElement.hasClass("empty-container-text")) {
                    selectedElement = selectedElement.find(".jq-plus-container-text");
                }

                if (selectedElement != undefined) {

                    var bi = selectedElement.css("background-image").replace('url(', '').replace(')', '');

                    jQuery(".bi-selected-image").val(bi);

                    var repeat = selectedElement.css("background-repeat");

                    jQuery(".ddn-bi-repeat").val(repeat);

                    var attachment = selectedElement.css("background-attachment");

                    jQuery(".ddn-bi-attachment").val(attachment);

                    var position = selectedElement.css("background-position");

                    jQuery(".ddn-bi-position").val(position);

                    var backgroundSize = selectedElement.css("background-size");

                    if (backgroundSize != undefined) {

                        var wh = backgroundSize.split(" ");

                        if (wh.length >= 2) {
                            var width = wh[0];
                            var heigth = wh[1];

                            jQuery(".ddn-bi-pixel-type").val("px")

                            width = width.replace("px", "");
                            heigth = heigth.replace("px", "");

                            jQuery(".smart-menu-bi-height").spinner("value", heigth);
                            jQuery(".smart-menu-bi-width").spinner("value", width);
                        }
                        else {
                            jQuery(".smart-menu-bi-height").spinner("value", 0);
                            jQuery(".smart-menu-bi-width").spinner("value", 0);
                        }

                    }

                }
            }
            catch (ex) {

            }

            BIJQ.isSelectProcessing = false;
        }   

    }
}